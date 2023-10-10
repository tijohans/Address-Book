/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'ag-blue': '#5AA9E6',
				'ls-blue': '#7FC8F8',
				seasalt: '#F9F9F9',
				'np-yellow': '#FFE45E',
				'cc-pink': '#FF6392'
			},
			boxShadow: {
				hard: '-6px 6px 0px 0px #000000'
			}
		}
	},
	plugins: []
};
