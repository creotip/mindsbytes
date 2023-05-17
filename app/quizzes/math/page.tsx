import { config } from '@/config/config'
import type { SingleQuiz } from '@/interfaces/quiz-interface'
import { QuizWrapper } from '@/components/quiz/quiz-wrapper'

const mathQuizApiURL = config.db.quizzes['math-general']

export default async function MathQuizPage() {
	const staticData = await fetch(mathQuizApiURL)
	const quiz: SingleQuiz[] = await staticData.json()

	return <QuizWrapper quiz={quiz} title="Mathematics" />
}
