import type { Handler } from '@netlify/functions';
import { getUserDetails } from './util/clerk';

export const handler: Handler = async () => {
	const users = await getUserDetails();

	users.forEach(async (user) => {
		const to: {
			user_id: string;
			phone_number?: string;
			email_address?: string;
		} = { user_id: user.id };

		if (user.phone_number) {
			to.phone_number = user.phone_number;
		}

		if (user.email_address) {
			to.email_address = user.email_address;
		}

		const options = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.COURIER_PROD_AUTH_TOKEN}`,
			},
			body: JSON.stringify({
				message: {
					content: {
						title: 'Hey, you seem cool',
						body: 'Wanna be friends?',
					},
					to,
				},
			}),
		};

		await fetch('https://api.courier.com/send', options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	});

	return {
		statusCode: 200,
		body: 'okay',
	};
};
