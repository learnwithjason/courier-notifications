import type { Handler } from '@netlify/functions';
import type { WebhookEvent } from '@clerk/clerk-sdk-node';
import { Webhook } from 'svix';

type ProfileData = {
	email?: string;
	phone_number?: string;
	custom: { role: 'member' | 'admin' };
};

function validateWebhook(req) {
	try {
		const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
		wh.verify(req.body ?? '', req.headers as any);
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

function getProfileDetails({ email_addresses, phone_numbers }): ProfileData {
	const profile: ProfileData = { custom: { role: 'member' } };

	if (email_addresses.length > 0 && email_addresses[0].email_address) {
		profile.email = email_addresses[0].email_address;
	}

	if (phone_numbers.length > 0 && phone_numbers[0].phone_number) {
		profile.phone_number = phone_numbers[0].phone_number;
	}

	return profile;
}

export const handler: Handler = async (req) => {
	// ensure the webhook is valid before doing anything
	if (!validateWebhook(req)) {
		return {
			statusCode: 400,
			body: 'Bad Request',
		};
	}

	const event = JSON.parse(req.body ?? '') as WebhookEvent;

	// the API endpoint and headers are the same for all calls below
	const courierEndpoint = `https://api.courier.com/profiles/${event.data.id}`;
	const headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: `Bearer ${process.env.COURIER_PROD_AUTH_TOKEN}`,
	};

	switch (event.type) {
		// if a user is created or updated in Clerk, add them to Courier as well
		case 'user.created':
		case 'user.updated':
			await fetch(courierEndpoint, {
				method: 'POST',
				headers,
				body: JSON.stringify({
					profile: getProfileDetails(event.data),
				}),
			});
			break;

		// if a user is deleted in Clerk, remove them from Courier as well
		case 'user.deleted':
			await fetch(courierEndpoint, { method: 'DELETE', headers });
			break;

		// if the event type is unknown, assume the request is no good
		default:
			return {
				statusCode: 400,
				body: 'Bad Request',
			};
	}

	// return 200 to let Clerk know the webhook succeeded
	return {
		statusCode: 200,
		body: 'OK',
	};
};
