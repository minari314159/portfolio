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
				primary: "#210124",
				shadowPrimary: "#371a39",
				secondary: "#514A59",
				tertiary: "#706076",
				accent: "#E2BE4F",
				textmain: "#F2EDF5",
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
