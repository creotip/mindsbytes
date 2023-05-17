import { extendTheme } from '@chakra-ui/react'

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
}

const styles = {
	global: {
		body: {
			maxWidth: '90rem',
			mx: 'auto',
		},
	},
}

export const theme = extendTheme({ styles, colors })
