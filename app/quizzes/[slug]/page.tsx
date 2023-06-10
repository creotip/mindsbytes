import { config } from '@/config/config'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import { QuizWrapper } from '@/components/quiz/quiz-wrapper'
import fs from 'fs'
import path from 'path'

// import { Metadata } from 'next'

const quizJavascriptApiURL = config.db.quizzes['javascript-general']

// export const metadata: Metadata = {
// 	title: 'Javascript quiz- MindsBytes',
// 	description: `Enhance your JavaScript expertise with our exciting quiz! From basic syntax to advanced concepts, put your coding skills to the test.`,
// }

export async function fetchJsonFiles() {
	const quizzesDirectory = path.join(process.cwd(), 'quizzes')
	const filenames = fs.readdirSync(quizzesDirectory)

	const quizPromises = filenames.map(async (filename) => {
		const filePath = path.join(quizzesDirectory, filename)
		const fileContents = await fs.promises.readFile(filePath, 'utf8')
		const jsonData = JSON.parse(fileContents)
		return jsonData
	})

	return Promise.all(quizPromises)
}

export async function generateStaticParams() {
	const quizzes = await fetchJsonFiles()
	console.log(quizzes)

	return quizzes.map((quiz) => ({
		slug: quiz?.slug,
	}))
}

export default async function QuizPage() {
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
