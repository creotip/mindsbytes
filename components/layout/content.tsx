'use client'
import { Box, BoxProps } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const Content = (props: BoxProps) => {
	const pathname = usePathname()

	return (
		<Box
			className="content"
			minH="325px"
			border={pathname === '/' ? 'none' : '1px solid #333f57'}
			borderRadius="7px"
			{...props}
		/>
	)
}
