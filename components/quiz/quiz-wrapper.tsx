'use client'
import type { SingleQuiz } from '@/interfaces/quiz-interface'
import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Select,
	Stack,
	VStack,
} from '@chakra-ui/react'
import { useQuizStore } from '@/config/store'
import { Quiz } from '@/components/quiz/quiz'
import { useEffect } from 'react'

interface WrapperProps {
	quiz: SingleQuiz[]
	title: string
}
export const QuizWrapper = ({ quiz, title }: WrapperProps) => {
	const levels = new Set(quiz.map((q) => q.level))
	const categories = new Set(quiz.map((q) => q.category).flat())

	const { isQuizActive, setQuizActive, setCurrentQuizTypeTitle } = useQuizStore((state) => state)

	const handleStartQuiz = () => {
		if (!isQuizActive) {
			setQuizActive(true)
			setCurrentQuizTypeTitle(title)
		}
	}

	useEffect(() => {
		return () => {
			setQuizActive(false)
			setCurrentQuizTypeTitle('')
		}
	}, [setCurrentQuizTypeTitle, setQuizActive])

	if (isQuizActive) {
		return <Quiz title={title} quiz={quiz} />
	}

	return (
		<>
			<Heading as="h2" textAlign="center" my="2rem">
				{title} Quiz
			</Heading>

			<VStack spacing="3rem" pb="40px">
				<Box>
					<Box textAlign="center" mb={1} fontWeight="600">
						Choose Level
					</Box>
					<CheckboxGroup colorScheme="purple" defaultValue={['all']}>
						<Stack spacing={[1, 5]} direction={['column', 'row']}>
							<Checkbox value="all">All</Checkbox>
							{[...levels].map((level) => (
								<Checkbox key={level} value={level}>
									{level}
								</Checkbox>
							))}
						</Stack>
					</CheckboxGroup>
				</Box>

				<Box>
					<Box textAlign="center" mb={1} fontWeight="600">
						Choose Category
					</Box>
					<Select defaultValue="All">
						<option value="All">All</option>
						{[...categories].map((cat, index) => (
							<option key={index} value={cat}>
								{cat}
							</option>
						))}
					</Select>
				</Box>

				<Button
					onClick={handleStartQuiz}
					colorScheme="blue"
					borderRadius="6px"
					fontSize="15px"
					minW="220px"
				>
					Start Quiz
				</Button>
			</VStack>
		</>
	)
}
