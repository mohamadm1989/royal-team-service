import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectIcon from '@tailwindcss/aspect-ratio';

export default {
    content: [
        "./index.html",
        "./index.tsx",
        "./App.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "slate-bg": "#1e293b",
                "safety-yellow": "#facc15",
                "safety-yellow-dark": "#eab308",
            },
            fontFamily: {
                sans: ["Open Sans", "sans-serif"],
                display: ["Roboto", "sans-serif"]
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [
        forms,
        typography,
        aspectIcon,
    ],
}
