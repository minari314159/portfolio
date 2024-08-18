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
			backgroundImage: {
				mountains: "url('/assets/mountains.png')",
				stars: "url('/assets/stars.png')",
				sun: "url('/assets/sun.png')",
				planets: "url('/assets/planets.png')",
			},
		},
	},
	plugins: [],
};
