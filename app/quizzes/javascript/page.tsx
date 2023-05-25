import { config } from '@/config/config'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import { QuizWrapper } from '@/components/quiz/quiz-wrapper'
import { Metadata } from 'next'

const quizJavascriptApiURL = config.db.quizzes['javascript-general']

export const metadata: Metadata = {
	title: 'Javascript quiz- MindsBytes',
	description: `Enhance your JavaScript expertise with our exciting quiz! From basic syntax to advanced concepts, put your coding skills to the test.`,
}

export default async function JavascriptQuizPage() {
	const staticData = await fetch(quizJavascriptApiURL)
	const quiz: SingleQuiz[] = await staticData.json()

	return <QuizWrapper quizQuestions={quiz} title="Javascript" />
}
