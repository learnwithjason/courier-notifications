export async function getUserDetails() {
	const res = await fetch('https://api.clerk.com/v1/users', {
		headers: {
			Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
		},
	});

	if (!res.ok) {
		console.error(res);

		return {
			statusCode: 500,
			body: JSON.stringify(res.statusText),
		};
	}

	const users = await res.json();

	const details = users.map((user) => {
		let sendOptions: {
			id: string;
			email_address?: string;
			phone_number?: string;
		} = {
			id: user.id,
		};

		if (user.email_addresses.length > 0) {
			sendOptions.email_address = user.email_addresses[0].email_address;
		}

		if (user.phone_numbers.length > 0) {
			sendOptions.phone_number = user.phone_numbers[0].phone_number;
		}
		return sendOptions;
	});

	return details;
}
