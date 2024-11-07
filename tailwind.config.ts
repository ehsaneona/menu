import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            white: '#fff',
            black: '#000',
            grey: 'rgba(181, 181, 181, 0.24)',
        },
    },
    plugins: [tailwindcssAnimate],
};

export default config;
