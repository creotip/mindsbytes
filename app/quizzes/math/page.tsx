import { config } from '@/config/config'
import type { SingleQuiz } from '@/interfaces/quiz-interface'
import { QuizWrapper } from '@/components/quiz/quiz-wrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Mathematics quiz - MindsBytes',
	description: `Put your Math skills to the test! Our engaging Math quiz covers algebra, geometry, calculus, and more.`,
}

const mathQuizApiURL = config.db.quizzes['math-general']

export default async function MathQuizPage() {
	const staticData = await fetch(mathQuizApiURL)
	const quiz: SingleQuiz[] = await staticData.json()

	return (
		<QuizWrapper
			quizQuestions={quiz}
			title="Mathematics"
			longDescription={`Welcome to our Mathematics Quiz section, where you can test your knowledge and sharpen your math skills! Dive into a world of numbers, equations, and problem-solving as you challenge yourself with a wide range of math quizzes. From basic arithmetic to advanced calculus, our quizzes cover various topics, including algebra, geometry, statistics, and more. Whether you're a student looking for an interactive learning experience or a math enthusiast seeking to challenge yourself, our engaging quizzes will put your mathematical abilities to the test`}
		/>
	)
}
