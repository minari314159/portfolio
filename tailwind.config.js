/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#cfcbbc",
				shadowPrimary: "#373735",
				secondary: "#c0bdaa",
				tertiary: "#525266",
				accent: "#D1E0DE",
				textmain: "#252427",
				textSecondary: "#cfcbbc",
			},
		},
	},
	plugins: [],
};
