/** @type {import('tailwindcss').Config} */
export default {
	daisyui: {
		themes: ['light']
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				slate_gray: '#717E8B',
				porcelain: '#EDEFF1',
				french_gray: '#BCC0C4',
				stone_gray: '#7D848A',
				accent_green: '#2BAB89',
				accent_light_green: '#E9F7F3',
				accent_red: '#FF6B6B',
				accent_light_red: '#FFEEEE',
				space_gray: '#49535B',
				charcoal: '#2B4053',
				primary_dark: '#13283E',
				athens_gray: '#FCFCFD',
				cadet_gray: '#9FADB9',
				rich_black: '#06161A'
			}
		}
	},
	plugins: [
		require('daisyui')
		// require('@tailwindcss/forms')
	]
};
