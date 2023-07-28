import {
	RedirectToSignIn,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/clerk-react';
import { Notifications } from './notifications';

import styles from './dashboard.module.css';

export const Dashboard = () => {
	return (
		<>
			<header className={styles.header}>
				<a className={styles.homeLink} href="/" rel="home">
					Toofshine
				</a>

				<nav className={styles.nav}>
					<SignedIn>
						<Notifications />
						<UserButton
							appearance={{
								elements: {
									avatarBox: {
										border: '1px solid var(--color-black)',
									},
								},
							}}
						/>
					</SignedIn>
					<SignedOut>
						<RedirectToSignIn />
					</SignedOut>
				</nav>
			</header>

			<section className={styles.progress}>
				<div className={styles.card}>
					<img
						src="https://images.unsplash.com/photo-1520013573795-38516d2661e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZsb3NzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
						alt="four hands, each holding a different tooth care product"
					/>
				</div>

				<div className={styles.card}>
					<h3>Floss Streak</h3>
					<p>23 days</p>
				</div>

				<div className={styles.card}>
					<h3>Next Appt</h3>
					<p>Aug 18</p>
				</div>
			</section>

			<section className={styles.overview}>
				<div className={styles.card}>
					<h3>Try Toofshine Premium!</h3>
					<p>Save 20% on floss and more!</p>
					<a href="#toofshine-premium" className={styles.button}>
						Sign up now &rarr;
					</a>
				</div>

				<div className={styles.card}>
					<h3>Quick Actions</h3>
					<ul className={styles.actions}>
						<li>
							<a href="#log" title="Update Floss Log">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 100 100"
								>
									<path
										fill="currentColor"
										d="M96.5 50.6 75.3 34.7 43 77.8c-.3.5-.5 1-.6 1.5l-1.3 14.4c-.1.9.8 1.6 1.6 1.2l13.4-5.3c.5-.2 1-.5 1.3-1l2.7-3.6 26.6-35.5 4.7 3.5-8.1 10.8c-.8 1.1-.6 2.7.5 3.5 1.1.8 2.7.6 3.5-.5L96.9 54c.9-1 .7-2.6-.4-3.4ZM59.9 21.3c0-3.5-2.8-6.3-6.3-6.3H9.3C5.8 15 3 17.8 3 21.3v44.4C3 69.2 5.8 72 9.3 72h30L60 44.4V21.3h-.1ZM45.6 37.9 30.6 54c-.7.7-1.7 1.2-2.6 1.2-1 0-2-.4-2.6-1.2l-7.9-8.5c-.7-.7-1-1.6-1-2.6s.5-1.9 1.2-2.5c.7-.6 1.5-1 2.5-1s2 .4 2.6 1.1l5.3 5.7 12.4-13.3a3.63 3.63 0 0 1 5.1-.1c.7.7 1.1 1.6 1.1 2.5-.1.9-.5 1.9-1.1 2.6ZM97.3 35.6c1.1-1.5.8-3.6-.7-4.7l-9-6.9c-1.5-1.1-3.6-.8-4.7.7l-4.2 5.6 14.5 10.9 4.1-5.6Z"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href="#book" title="Book Appointment">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 100 100"
								>
									<path
										fill="currentColor"
										d="M88.4 9.9h-7.5V3.7c0-1.5-1.2-2.7-2.7-2.7-1.5 0-2.7 1.2-2.7 2.7V10H61.8V3.7c0-1.5-1.2-2.7-2.7-2.7-1.5 0-2.7 1.2-2.7 2.7V10H42.6V3.7c0-1.5-1.2-2.7-2.7-2.7-1.5 0-2.7 1.2-2.7 2.7V10H23.5V3.7c0-1.5-1.2-2.7-2.7-2.7-1.5 0-2.7 1.2-2.7 2.7V10h-7.5A8.6 8.6 0 0 0 2 18.6v62.2c0 4.7 3.8 8.6 8.6 8.6h77.9c4.7 0 8.6-3.8 8.6-8.6V18.5c-.1-4.7-3.9-8.6-8.7-8.6Zm0 73.9H10.6c-1.7 0-3.1-1.4-3.1-3.1V33.6h84.1v47.1c0 1.7-1.4 3.1-3.2 3.1Z"
									/>
									<path
										fill="currentColor"
										d="M30.1 39.7h-10c-2 0-3.6 1.6-3.6 3.6v8.3c0 2 1.6 3.6 3.6 3.6h10c2 0 3.6-1.6 3.6-3.6v-8.3c0-2-1.6-3.6-3.6-3.6ZM30.1 62.3h-10c-2 0-3.6 1.6-3.6 3.6v8.2c0 2 1.6 3.6 3.6 3.6h10c2 0 3.6-1.6 3.6-3.6v-8.3c0-1.9-1.6-3.5-3.6-3.5ZM54.5 39.7h-10c-2 0-3.6 1.6-3.6 3.6v8.3c0 2 1.6 3.6 3.6 3.6h10c2 0 3.6-1.6 3.6-3.6v-8.3c0-2-1.6-3.6-3.6-3.6ZM54.5 62.3h-10c-2 0-3.6 1.6-3.6 3.6v8.2c0 2 1.6 3.6 3.6 3.6h10c2 0 3.6-1.6 3.6-3.6v-8.3c0-1.9-1.6-3.5-3.6-3.5ZM78.9 39.7h-10c-2 0-3.6 1.6-3.6 3.6v8.3c0 2 1.6 3.6 3.6 3.6h10c2 0 3.6-1.6 3.6-3.6v-8.3c0-2-1.6-3.6-3.6-3.6ZM78.9 62.3h-10c-2 0-3.6 1.6-3.6 3.6v8.2c0 2 1.6 3.6 3.6 3.6h10c2 0 3.6-1.6 3.6-3.6v-8.3c0-1.9-1.6-3.5-3.6-3.5Z"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href="#share" title="Share Your Progress">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 100 100"
								>
									<path
										fill="currentColor"
										d="M68.1 59.92c-.7 0-1.5-.1-2.1-.3v7.1c0 2.4-2 4.4-4.4 4.4H19.3c-2.4 0-4.4-2-4.4-4.4v-31.9c0-2.4 2-4.4 4.4-4.4h12.3c2.8-3.5 6-6.9 9.6-9.9H19.3c-7.9 0-14.3 6.4-14.3 14.3v31.9c0 7.9 6.4 14.3 14.3 14.3h42.2c7.9 0 14.3-6.4 14.3-14.3v-10.7l-2.5 2a8.32 8.32 0 0 1-5.2 1.9Z"
									/>
									<path
										fill="currentColor"
										d="M99.3 26.22 69.2 2.42c-1.2-1-3-.1-3 1.5v12.9c-20.4 1.2-33.6 21.6-39.9 34.4-.9 1.9 1.4 3.6 2.9 2.2a57.9 57.9 0 0 1 37-14.8v12.8c0 1.6 1.8 2.4 3 1.5l30.1-23.8c.9-.8.9-2.2 0-2.9Z"
									/>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</section>

			<section className={styles.log}>
				<ul className={styles.logList}>
					<li className={styles.logHeader}>
						<span>Date</span>
						<span>Brushed</span>
						<span>Flossed</span>
					</li>
					<li className={styles.logEntry}>
						<span>Jul 28, 2023</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
					</li>
					<li className={styles.logEntry}>
						<span>Jul 27, 2023</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
					</li>
					<li className={styles.logEntry}>
						<span>Jul 26, 2023</span>
						<span role="img" aria-label="red cross">
							❌
						</span>
						<span role="img" aria-label="red cross">
							❌
						</span>
					</li>
					<li className={styles.logEntry}>
						<span>Jul 24, 2023</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
					</li>
					<li className={styles.logEntry}>
						<span>Jul 23, 2023</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
					</li>
					<li className={styles.logEntry}>
						<span>Jul 21, 2023</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
						<span role="img" aria-label="red cross">
							❌
						</span>
					</li>
					<li className={styles.logEntry}>
						<span>Jul 20, 2023</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
						<span role="img" aria-label="green checkmark">
							✅
						</span>
					</li>
				</ul>
			</section>

			<footer className={styles.footer}>
				<span>
					a <a href="https://lwj.dev">Learn With Jason</a> project
				</span>
				<span>
					icons by{' '}
					<a href="https://thenounproject.com/coquet_adrien/">Adrien Coquet</a>{' '}
					(CC BY 3.0)
				</span>
				<span>
					<a href="https://lwj.dev">tutorial</a>
				</span>
				<span>
					<a href="https://github.com/learnwithjason/courier-notifications">
						source code
					</a>
				</span>
			</footer>
		</>
	);
};
