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
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
} from '@chakra-ui/react'
import { useQuizStore } from '@/config/store'
import { Quiz } from '@/components/quiz/quiz'
import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface WrapperProps {
	quizQuestions: SingleQuiz[]
	title: string
}
export const QuizWrapper = ({ quizQuestions, title }: WrapperProps) => {
	const levels = new Set(quizQuestions.map((q) => q.level))
	const categories = new Set(quizQuestions.map((q) => q.category).flat())
	const { isQuizActive, setQuizActive, setCurrentQuizTypeTitle } = useQuizStore((state) => state)

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm()

	function onSubmit(values: Record<string, any>) {
		console.log('values', values)
		handleStartQuiz()
	}

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
		return <Quiz title={title} quizQuestions={quizQuestions} />
	}

	return (
		<>
			<Heading as="h2" textAlign="center" my="2rem">
				{title} Quiz
			</Heading>

			<VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="3rem" pb="40px">
				<Box>
					<Box textAlign="center" mb={1} fontWeight="600">
						Choose Level
					</Box>
					<CheckboxGroup colorScheme="purple" defaultValue={['all']}>
						<Stack spacing={[1, 5]} direction={['column', 'row']}>
							<Checkbox value="all">All</Checkbox>
							{Array.from(levels).map((level) => (
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
						{Array.from(categories).map((cat, index) => (
							<option key={index} value={cat}>
								{cat}
							</option>
						))}
					</Select>
				</Box>

				<Button
					// onClick={handleStartQuiz}
					isLoading={isSubmitting}
					type="submit"
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
