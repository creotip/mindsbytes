'use client'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import { Heading } from '@chakra-ui/react'

interface QuizProps {
	quizQuestions: SingleQuiz[]
	title: string
}
export const Quiz = ({ title, quizQuestions }: QuizProps) => {
	console.log('quiz', quizQuestions)
	return (
		<div>
			<Heading as="h2" textAlign="center" my="2rem">
				{title} Quiz{' '}
			</Heading>
		</div>
	)
}
