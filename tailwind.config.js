/** @type {import('tailwindcss').Config} **/
import colors from 'tailwindcss/colors';

export default {
    content: ['./src/**/*.js', './src/**/*.jsx'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        colors: {
            ...colors,
            primary: colors.sky,
            secondary: colors.gray,
        },
    },
    plugins: [],
};
