/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
    darkMode: ["class"],
    content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
 	container: {
 		center: true,
 		padding: '15px'
 	},
 	screens: {
 		sm: '640px',
 		md: '768px',
 		lg: '1024px',
 		xl: '1280px',
 		'2xl': '1536px'
 	},
 	fontFamily: {
 		'source-code': [
 			'`"Source Code Pro"`',
 			'`monospace`'
 		]
 	},
 	extend: {
 		colors: {
 			primary: '#354da1',
 			secondary: '#59668a',
 			tulang: '#f4f4f4',
 			hitam: '#0f0f0f'
 		},
 		borderRadius: {
 			lg: 'var(--radius)',
 			md: 'calc(var(--radius) - 2px)',
 			sm: 'calc(var(--radius) - 4px)'
 		}
 	}
 },
 plugins: [
  plugin(function ({matchUtilities, theme}) {
   matchUtilities(
    {
     "animate-duration": (value) => ({
      animationDuration: value,
     }),
    },
    {values: theme("transitionDuration")}
   );
  }),
     require("tailwindcss-animate")
],
};
