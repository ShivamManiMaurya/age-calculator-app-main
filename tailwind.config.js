/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "custom-offWhite": "hsl(0, 0%, 94%)",
                "custom-lightGray": "hsl(0, 0%, 86%)",
                "custom-smokeyGray": "hsl(0, 1%, 44%)",
                "custom-offBlack": "hsl(0, 0%, 8%)",
                "custom-lightRed": "hsl(0, 100%, 67%)",
                "custom-purple": "hsl(259, 100%, 65%)",
            },
        },
    },
    plugins: [],
};
