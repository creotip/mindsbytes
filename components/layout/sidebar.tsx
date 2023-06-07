'use client'
import { Box } from '@chakra-ui/react'
import { QuizList } from '../quiz/quiz-list'

export const Sidebar = () => {
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
				<QuizList />
			</Box>
		</Box>
	)
}
