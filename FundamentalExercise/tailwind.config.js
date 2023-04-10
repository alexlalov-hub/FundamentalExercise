/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			'purple' : 'rgba(76, 64, 247, 1)',
			'grey' : 'rgba(216, 216, 216, 1)'
		},
		extend: {},
	},
	plugins: [],
}

