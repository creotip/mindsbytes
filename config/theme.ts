import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
}

const fonts = {
	body: 'var(--font-inter)',
	heading: 'var(--font-inter)',
	mono: 'Menlo, monospace',
}

const styles = {
	global: {
		body: {},
	},
}

export const theme = extendTheme({ styles, colors, fonts, config })
