import { Flex, Tag } from '@chakra-ui/react'

interface QuizToolbarProps {
	title: string
	currentQuestionOutofTotal: string
	level: string
}

const levelColorMap: Record<string, string> = {
	easy: 'green',
	medium: 'yellow',
	hard: 'red',
}

const QuizToolbar = ({ title, currentQuestionOutofTotal, level }: QuizToolbarProps) => {
	const levelColor = levelColorMap[level.toLowerCase()]
	return (
		<Flex
			alignItems="center"
			justifyContent="space-between"
			shadow="md"
			px="2rem"
			py="1rem"
			fontSize="sm"
		>
			<Tag colorScheme="blue">{currentQuestionOutofTotal}</Tag>

			<Tag textAlign="center" fontWeight="600">
				{title} Quiz
			</Tag>
			<Tag colorScheme={levelColor}> {level}</Tag>
		</Flex>
	)
}

export default QuizToolbar
