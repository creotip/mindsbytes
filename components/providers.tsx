'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from '@/config/theme'
import { inter } from '@/app/layout'

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<style jsx global>
				{`
					:root {
						--font-inter: ${inter.style.fontFamily};
					}
				`}
			</style>
			<CacheProvider>
				<ColorModeScript initialColorMode="dark" />
				<ChakraProvider theme={theme}>{children}</ChakraProvider>
			</CacheProvider>
		</>
	)
}
