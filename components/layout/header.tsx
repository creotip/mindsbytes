'use client'
import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { MdCenterFocusWeak } from 'react-icons/md'
import { motion } from 'framer-motion'

export const Header = () => {
	return (
		<Box as="header" py={6}>
			<Box as="h2" fontWeight="900" fontSize="xl">
				<Link display="flex" alignItems="center" gap="10px" href="/" _hover={{ opacity: '0.7' }}>
					<MdCenterFocusWeak size="24px" />
					<motion.span
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						whileHover={{ scale: 1.1 }}
						className="logo"
					>
						MindsBytes
					</motion.span>
				</Link>
			</Box>
		</Box>
	)
}
