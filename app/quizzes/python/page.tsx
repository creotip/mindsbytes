import { config } from '@/config/config'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import { QuizWrapper } from '@/components/quiz/quiz-wrapper'

const quizJavascriptApiURL = config.db.quizzes['python-general']

export default async function PythonQuizPage() {
	const staticData = await fetch(quizJavascriptApiURL)
	const quiz: SingleQuiz[] = await staticData.json()

	return <QuizWrapper quiz={quiz} title="Python" />
}
