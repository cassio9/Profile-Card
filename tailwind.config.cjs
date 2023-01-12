/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				DarkCyan: "hsl(185, 75%, 39%)",
				VeryDarkUnsaturatedBlue: "hsl(229, 23%, 23%)",
				DarkGrayishBlue: "hsl(227, 10%, 46%)",
				DarkGray: "hsl(0, 0%, 59%)",
			},
			fontFamily: {
				KumbhSans: ["Kumbh Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
