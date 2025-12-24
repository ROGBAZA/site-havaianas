/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0054A6", // Havaianas Blue
                secondary: "#FFCF00", // Havaianas Yellow
                accent: "#E31D2D", // Havaianas Red
                brGreen: "#009739", // Brazil Green
            },
        },
    },
    plugins: [],
}
