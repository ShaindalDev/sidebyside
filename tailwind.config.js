// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{html,js}',
        './dist/**/*.{html,js}',
    ],
    important: true,
    theme: {
        fontFamily: {
            'body': ['Work Sans', 'sans-serif'],
        },
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1200px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.125rem',
                sm: '2.5rem',
                lg: '2rem',
                xl: '2rem',
                '2xl': '2.5rem',
            },
        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ],
}
