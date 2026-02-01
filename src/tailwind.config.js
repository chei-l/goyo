/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./templates/**/*.html",
        "./templates/**/*.tera",
        "./content/**/*.md",
        "./content/**/*.html",
        "./static/**/*.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        // Only if you actually use daisyUI:
        require("daisyui"),
    ],
};
