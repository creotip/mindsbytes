'use client'
import { useQuiz } from '@/hooks/use-quiz'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import { Box, Heading, Button } from '@chakra-ui/react'

interface QuizProps {
	quizQuestions: SingleQuiz[]
	title: string
}
export const Quiz = ({ title, quizQuestions }: QuizProps) => {
	const {
		currentQuestion,
		currentQuestionIndex,
		score,
		scorePercentage,
		quizCompleted,
		handleAnswer,
		resetQuiz,
	} = useQuiz(quizQuestions)

	console.log('currentQuestion', {
		currentQuestion,
		currentQuestionIndex,
		score,
		scorePercentage,
		quizCompleted,
		handleAnswer,
		resetQuiz,
	})
	return (
		<Box px="1rem">
			<Heading as="h2" fontSize="1.4rem" textAlign="center" my="2rem">
				{title} Quiz{' '}
			</Heading>

			<Box>{currentQuestion.question}</Box>

			<Button
				onClick={() => handleAnswer(currentQuestion.options[0])}
				colorScheme="blue"
				borderRadius="6px"
				fontSize="15px"
				minW="220px"
			>
				Next
			</Button>
		</Box>
	)
}
