import type { Handler } from '@netlify/functions';

type ProfileData = {
	email?: string;
	phone_number?: string;
	custom: { role: 'member' | 'admin' };
};

export const handler: Handler = async (req) => {
	// TODO sync users from Clerk to Courier

	return {
		statusCode: 200,
		body: JSON.stringify('ok'),
	};
};
