// module.exports = {
// 	content: [
// 		'./index.html',
// 		'./src/**/*.{js,ts,jsx,tsx}', // Пути к вашим файлам
// 	],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
	theme: {
		extend: {
			fontFamily: {
				'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
			},
			colors: {
				space: {
					100: '#1a103d',
				},
			},
			animation: {
				twinkle: 'twinkle 3s ease-in-out infinite',
				float: 'float 6s ease-in-out infinite',
				drift: 'drift 20s linear infinite',
				comet: 'comet 15s linear infinite',
				rocket: 'rocket 25s linear infinite',
				spacesheep: 'spacesheep 30s linear infinite',
			},
		},
	},
	plugins: [],
}
