import { config } from '@/config/config'
import type { SingleQuiz } from '@/interfaces/quiz-interface'
import { QuizWrapper } from '@/components/quiz/quiz-wrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Mathematics quiz - MindsBytes',
	description: `Put your math skills to the test! Our engaging quiz covers algebra, geometry, calculus, and more.`,
}

const mathQuizApiURL = config.db.quizzes['math-general']

export default async function MathQuizPage() {
	const staticData = await fetch(mathQuizApiURL)
	const quiz: SingleQuiz[] = await staticData.json()

	return <QuizWrapper quizQuestions={quiz} title="Mathematics" />
}
