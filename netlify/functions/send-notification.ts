import type { Handler } from '@netlify/functions';

export const handler: Handler = async (req) => {
	// TODO send notifications to users via Courier

	return {
		statusCode: 200,
		body: JSON.stringify('ok'),
	};
};
