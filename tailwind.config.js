import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "rgb(22,119,189)",
				secondary: "rgb(30,30,30)",
				accent: "rgb(175,175,175)",
				searchText: "rgb(122,122,122)",
			},
			fontFamily: {
				roboto: '"Roboto", serif',
				lexend: '"Lexend", serif',
			},
			screens: {
				"1160px": "1160px",
				"1070px": "1070px",
				"400px": "400px",
			},
		},
	},
	darkMode: "class",
	plugins: [heroui()],
};
