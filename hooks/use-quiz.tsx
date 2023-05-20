import { QuizOption, SingleQuiz } from '@/interfaces/quiz-interface'
import { useState } from 'react'

export function useQuiz(quizData: SingleQuiz[]) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [score, setScore] = useState(0)
	const [quizCompleted, setQuizCompleted] = useState(false)

	const currentQuestion = quizData[currentQuestionIndex]

	const handleAnswer = (option: QuizOption) => {
		if (option.rightAnswer) {
			setScore((prevScore) => prevScore + 1)
		}

		if (currentQuestionIndex === quizData.length - 1) {
			setQuizCompleted(true)
		} else {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
		}
	}

	const resetQuiz = () => {
		setCurrentQuestionIndex(0)
		setScore(0)
		setQuizCompleted(false)
	}

	return {
		currentQuestion,
		currentQuestionIndex,
		score,
		quizCompleted,
		handleAnswer,
		resetQuiz,
	}
}