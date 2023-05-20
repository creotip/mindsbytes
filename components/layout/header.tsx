'use client'
import {
	Button,
	Box,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	IconButton,
	useDisclosure,
	Flex,
	Show,
	Divider,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { MdCenterFocusWeak } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { QuizList } from '../quiz/quiz-list'
import { useUIStore } from '@/config/store'

export const Header = () => {
	const { isDrawerOpen, setDrawer } = useUIStore((state) => state)

	return (
		<Flex as="header" justifyContent="space-between" py={6} px="1rem">
			<Box className="logo" fontWeight="900" fontSize="xl">
				<Link display="flex" alignItems="center" gap="10px" href="/" _hover={{ opacity: '0.7' }}>
					<MdCenterFocusWeak size="24px" />
					<motion.span
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						whileHover={{ scale: 1.1 }}
					>
						MindsBytes
					</motion.span>
				</Link>
			</Box>

			<Show below="md">
				<IconButton
					aria-label="Call Sage"
					fontSize="20px"
					onClick={() => setDrawer(true)}
					icon={<HiOutlineMenuAlt3 />}
				/>
				<Drawer isOpen={isDrawerOpen} placement="right" onClose={() => setDrawer(false)}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>Choose your quiz</DrawerHeader>

						<DrawerBody>
							<QuizList />
						</DrawerBody>

						<DrawerFooter>
							<Button variant="outline" mr={3} onClose={() => setDrawer(false)}>
								Cancel
							</Button>
							<Button colorScheme="blue">Save</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</Show>
		</Flex>
	)
}
