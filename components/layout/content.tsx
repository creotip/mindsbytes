'use client'
import { Box, BoxProps } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

export const Content = (props: BoxProps) => (
	<AnimatePresence>
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
			exist={{ opacity: 0 }}
		>
			<Box
				className="content"
				minH="325px"
				border="1px solid #333f57"
				borderRadius="7px"
				{...props}
			/>
		</motion.div>
	</AnimatePresence>
)
