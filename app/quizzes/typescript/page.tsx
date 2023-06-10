// import { config } from '@/config/config'
// import { SingleQuiz } from '@/interfaces/quiz-interface'
import { QuizWrapper } from '@/components/quiz/quiz-wrapper'
import { Metadata } from 'next'
import staticData from '@/quizzes/typescript-general.json'

// const quizJavascriptApiURL = config.db.quizzes['python-general']

export const metadata: Metadata = {
	title: 'Typescript quiz- MindsBytes',
	description: `Test your knowledge of TypeScript with our interactive quiz! Challenge yourself with questions on TypeScript syntax, features, and best practices`,
}

export default async function TypescriptQuizPage() {
	// const staticData = staticData || await fetch(mockPythonGeneral)
	// const quiz: SingleQuiz[] = await staticData.json()

	return (
		<QuizWrapper
			quizQuestions={staticData}
			title="Typescript"
			longDescription={`Welcome to our TypeScript Quiz page, where you can put your knowledge to the test and explore the ins and outs of TypeScript programming language. Whether you're a beginner looking to expand your understanding or an experienced developer aiming to refine your skills, our interactive quiz is the perfect resource for you. Dive into a series of thought-provoking questions covering various aspects of TypeScript, including syntax, data types, modules, decorators, and more. Our carefully crafted quiz will challenge you to apply your knowledge and make informed choices. As you progress, you'll receive instant feedback, allowing you to learn from your mistakes and reinforce your understanding`}
		/>
	)
}
