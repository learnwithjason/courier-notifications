import { CourierProvider } from '@trycourier/react-provider';
import { Inbox } from '@trycourier/react-inbox';
import { useUser } from '@clerk/clerk-react';

export function Notifications() {
	const { user } = useUser();

	console.log(user?.id);

	return (
		<CourierProvider
			userId={user?.id}
			clientKey={import.meta.env.VITE_COURIER_CLIENT_KEY}
		>
			<div className="notifications-wrapper">
				<Inbox />
			</div>
		</CourierProvider>
	);
}
