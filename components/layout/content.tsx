'use client'
import { Box, BoxProps } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const Content = (props: BoxProps) => {
	const pathname = usePathname()
	console.log('pathname', pathname)
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Box
					className="content"
					minH="325px"
					border={pathname === '/' ? 'none' : '1px solid #333f57'}
					borderRadius="7px"
					{...props}
				/>
			</motion.div>
		</AnimatePresence>
	)
}
