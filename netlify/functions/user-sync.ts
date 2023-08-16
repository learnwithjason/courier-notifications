import type { Handler } from '@netlify/functions';
import type { WebhookEvent } from '@clerk/clerk-sdk-node';
import { Webhook } from 'svix';
import { CourierClient } from '@trycourier/courier';

const courier = CourierClient({
	authorizationToken: process.env.COURIER_PROD_AUTH_TOKEN,
});

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
	if (!validateWebhook(req)) {
		return {
			statusCode: 400,
			body: 'Bad Request',
		};
	}

	const event = JSON.parse(req.body ?? '') as WebhookEvent;

	switch (event.type) {
		case 'user.created':
		case 'user.updated':
			await courier.replaceProfile({
				recipientId: event.data.id,
				profile: getProfileDetails(event.data),
			});
			break;

		case 'user.deleted':
			if (!event.data.id) {
				break;
			}

			await courier.deleteProfile({
				recipientId: event.data.id,
			});
			break;

		default:
			return {
				statusCode: 400,
				body: 'Bad Request',
			};
	}

	return {
		statusCode: 200,
		body: 'OK',
	};
};
