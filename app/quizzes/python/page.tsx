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

	return (
		<QuizWrapper
			quizQuestions={quiz}
			title="Python"
			longDescription={`Welcome to our Python Quiz section, where you can put your Python skills to the test! Whether you're a beginner learning the fundamentals or an experienced programmer looking to refine your Python knowledge, our interactive quizzes are designed to challenge and enhance your coding abilities. Dive into the world of Python programming as you tackle a wide range of topics, including variables, functions, loops, data structures, and more. Our Python quizzes provide an engaging learning experience, helping you sharpen your problem-solving skills and gain confidence in writing efficient and elegant code. Start exploring the world of Python, solve coding challenges, and take your programming skills to the next level!`}
		/>
	)
}
