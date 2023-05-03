/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				lightBlue: 'var(--light-blue)',
				blueGray: 'var(--blue-gray)',
				darkBlue: 'var(--dark-blue)',
				eerieGray: 'var(--eerie-gray)',
				lightGray: 'var(--light-gray)',
				whiteGray: 'var(--white-gray)',
				white: 'var(--white)',
				black: 'var(--black)',
				navyBlue: 'var(--navy-blue)',
			},

			fontFamily: {
				mono: ['var(--font-space-mono)'],
			},

			boxShadow: {
				primaryShadow: 'var(--primary-shadow)',
			},
		},
	},
	plugins: [require('daisyui')],
};
