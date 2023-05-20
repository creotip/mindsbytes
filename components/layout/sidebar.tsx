'use client'
import {
	Box,
	List,
	ListItem,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { usePathname } from 'next/navigation'
import { QuizList } from '../quiz/quiz-list'

interface CustomLinkProps {
	href: string
	title: string
}
const CustomLink = ({ href, title }: CustomLinkProps) => {
	return (
		<Link href={href} _hover={{ color: 'purple.300' }}>
			{title}
		</Link>
	)
}
export const Sidebar = () => {
	const pathname = usePathname()

	return (
		<Box
			as="aside"
			overflowY="hidden"
			height="calc(100vh - 200px)"
			border="1px solid #333f57"
			p="20px"
			borderRadius="7px"
			_hover={{
				overflowY: 'scroll',
			}}
			display={['none', 'none', 'block']}
		>
			<Box as="nav" fontSize="14px" fontWeight="600">
				{/*<Box color="cyan.600" fontWeight="600" mb="4">*/}
				{/*	Quizzes*/}
				{/*</Box>*/}
				<QuizList />
			</Box>
		</Box>
	)
}
