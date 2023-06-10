// import { config } from '@/config/config'
// import { SingleQuiz } from '@/interfaces/quiz-interface'
import { QuizWrapper } from '@/components/quiz/quiz-wrapper'
import { Metadata } from 'next'
import staticData from '@/quizzes/rust-general.json'

// const quizJavascriptApiURL = config.db.quizzes['python-general']

export const metadata: Metadata = {
	title: 'Rust quiz- MindsBytes',
	description: `Level up your Python skills with our interactive quiz! From basic syntax to advanced concepts, test your coding knowledge and challenge yourself.`,
}

export default async function RustQuizPage() {
	// const staticData = staticData || await fetch(mockPythonGeneral)
	// const quiz: SingleQuiz[] = await staticData.json()

	return (
		<QuizWrapper
			quizQuestions={staticData}
			title="Rust"
			longDescription={`Welcome to our Rust Quiz section, where you can put your rust skills to the test! Whether you're a beginner learning the fundamentals or an experienced programmer looking to refine your Rust knowledge, our interactive quizzes are designed to challenge and enhance your coding abilities. Dive into the world of Rust programming as you tackle a wide range of topics, including variables, functions, loops, data structures, and more. Our Rust quizzes provide an engaging learning experience, helping you sharpen your problem-solving skills and gain confidence in writing efficient and elegant code. Start exploring the world of Rust, solve coding challenges, and take your programming skills to the next level!`}
		/>
	)
}
