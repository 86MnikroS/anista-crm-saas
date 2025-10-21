/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    500: '#16a34a',
                    700: '#15803d',
                },
            },
        },
    },
}