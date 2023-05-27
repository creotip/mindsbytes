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

	return (
		<QuizWrapper
			quizQuestions={quiz}
			title="Javascript"
			longDescription={`Step into the world of JavaScript with our interactive quiz section! Test your coding knowledge and explore the fundamentals of this versatile programming language. Whether you're a beginner seeking to grasp the basics or an experienced developer looking to polish your skills, our JavaScript quizzes are designed to challenge and educate. From variables and functions to objects, arrays, and DOM manipulation, our quizzes cover a wide range of topics. Put your coding prowess to the test, solve JavaScript puzzles, and deepen your understanding of this powerful language. Start coding and unleashing your creativity with JavaScript today!`}
		/>
	)
}
