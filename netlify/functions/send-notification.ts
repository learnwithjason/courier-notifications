import type { Handler } from '@netlify/functions';
import { CourierClient } from '@trycourier/courier';

const courier = CourierClient({
	authorizationToken: process.env.COURIER_PROD_AUTH_TOKEN,
});

export const handler: Handler = async (req) => {
	const { title, body } = JSON.parse(req.body ?? '');

	if (req.httpMethod !== 'POST' || !title || !body) {
		return {
			statusCode: 400,
			body: 'Bad Request',
		};
	}

	const res = await courier.send({
		message: {
			to: {
				audience_id: 'active-members',
			},
			content: {
				title,
				body,
			},
		},
	});

	return {
		statusCode: 200,
		body: JSON.stringify(res),
	};
};
