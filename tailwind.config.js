/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			DarkBlue: "hsl(233, 26%, 24%)",
			LimeGreen: "hsl(136, 65%, 51%)",
			BrightCyan: "hsl(192, 70%, 51%)",
			AppBackground: "#F5F7FA",
			GrayishBlue: "hsl(233, 8%, 62%)",
			LightGrayishBlue: "hsl(220, 16%, 96%)",
			VeryLightGray: "hsl(0, 0%, 98%)",
			White: "hsl(0, 0%, 100%)",
		},
	},
	plugins: [],
};
