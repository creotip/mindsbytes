import { Link, LinkProps } from '@chakra-ui/next-js'
import { useQuizStore, useUIStore } from '@/config/store'
import { usePathname, useRouter } from 'next/navigation'
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import { Ref } from 'react'
import React from 'react'

interface CustomLinkProps extends LinkProps {
	href: string
	isSidebar?: boolean
}
// eslint-disable-next-line react/display-name
export const CustomLink = React.forwardRef(
	({ href, isSidebar, ...props }: CustomLinkProps, ref: Ref<HTMLAnchorElement>) => {
		const { isOpen, onOpen, onClose } = useDisclosure()
		const { setDrawer } = useUIStore((state) => state)
		const { isQuizActive } = useQuizStore((state) => state)
		const pathname = usePathname()
		const isActiveLink = pathname.startsWith(href)
		const router = useRouter()

		const handleClick = async (e: any) => {
			if (isQuizActive) {
				e.preventDefault()
				onOpen()
			}

			setDrawer(false)
		}

		const handleModal = () => {
			router.push(href)
			onClose()
		}

		return (
			<>
				<Link
					ref={ref}
					onClick={handleClick}
					href={href}
					color={isActiveLink && isSidebar ? 'purple.300' : 'inherit'}
					_hover={{ color: 'purple.300' }}
					{...props}
				>
					{props.children}
				</Link>
				<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalBody py={6}>
							You have an active quiz. <br /> Are you sure you want to leave?
						</ModalBody>

						<ModalFooter>
							<Button onClick={handleModal} colorScheme="purple" mr={3}>
								Exit Quiz
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</>
		)
	}
)
