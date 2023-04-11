/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			'purple' : 'rgba(76, 64, 247, 1)',
			'grey' : 'rgba(185, 185, 185, 1)'
		},
		extend: {},
	},
	plugins: [],
}

