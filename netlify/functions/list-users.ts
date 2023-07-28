import type { Handler } from '@netlify/functions';
import { getUserDetails } from './util/clerk';

export const handler: Handler = async () => {
	const sendDetails = await getUserDetails();

	return {
		statusCode: 200,
		body: JSON.stringify(sendDetails),
	};
};
