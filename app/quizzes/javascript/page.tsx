import { config } from '@/config/config'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import { QuizWrapper } from '@/components/quiz/quiz-wrapper'

const quizJavascriptApiURL = config.db.quizzes['javascript-general']

export default async function JavascriptQuizPage() {
	const staticData = await fetch(quizJavascriptApiURL)
	const quiz: SingleQuiz[] = await staticData.json()

	// console.log('staticData', res)
	return <QuizWrapper quizQuestions={quiz} title="Javascript" />
}
