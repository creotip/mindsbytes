'use client'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import { Heading } from '@chakra-ui/react'

interface QuizProps {
	quiz: SingleQuiz[]
	title: string
}
export const Quiz = ({ title, quiz }: QuizProps) => {
	return (
		<div>
			<Heading as="h2" textAlign="center" my="2rem">
				{title} Quiz{' '}
			</Heading>
		</div>
	)
}
