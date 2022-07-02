module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			transitionProperty: {
				width: 'width'
			},
			boxShadow: {
				'shadow-small': '0 0 10px 1px rgb(115 103 240 / 70%);'
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				blue: {
					primary: '#0078d7',
					light: '#2b88d8',
					border: '#579cd2'
				},
				red: {
					primary: '#ec1111',
					secondary: '#ff4a68'
				},
				green: {
					primary: '#5dd255',
					secondary: '#57af00'
				}
			},
			screens: {
				phablet: '480px',
				tablet: '768px',
				desklet: '840px',
				desktop: '1024px',
				wide: '1280px',
				ultra: '1440px'
			}
		},
		plugins: []
	}
}
