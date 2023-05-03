import './globals.css'
import { Space_Mono } from 'next/font/google';

const space_mono = Space_Mono({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-space-mono',
});

export const metadata = {
	title: 'FEM | GitHub User API',
	description: 'Created by Dawid Keyser',
};

export default function RootLayout({ children }) {
  return (
			<html lang='en'>
				<body className={`dark ${space_mono.variable}`}>{children}</body>
			</html>
		);
}
