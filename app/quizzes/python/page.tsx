import { config } from '@/config/config'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import { QuizWrapper } from '@/components/quiz/quiz-wrapper'
import { Metadata } from 'next'

const quizJavascriptApiURL = config.db.quizzes['python-general']

export const metadata: Metadata = {
	title: 'Python quiz- MindsBytes',
	description: `Level up your Python skills with our interactive quiz! From basic syntax to advanced concepts, test your coding knowledge and challenge yourself.`,
}

export default async function PythonQuizPage() {
	const staticData = await fetch(quizJavascriptApiURL)
	const quiz: SingleQuiz[] = await staticData.json()

	return <QuizWrapper quizQuestions={quiz} title="Python" />
}
