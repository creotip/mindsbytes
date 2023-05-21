import { QuizOption, SingleQuiz } from '@/interfaces/quiz-interface'
import { useMemo, useState } from 'react'
import { useMap } from './use-map'

export function useQuiz(quizQuestions: SingleQuiz[]) {
	const [answersMap, { set: setAnswersMap, clear: clearAnswersMap }] = useMap([])
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [quizCompleted, setQuizCompleted] = useState(false)

	const currentQuestion = quizQuestions[currentQuestionIndex]

	const score = useMemo(() => {
		let score = 0

		answersMap.forEach((value) => {
			if (value) {
				score++
			}
		})
		return score
	}, [answersMap])

	console.log('score', score)

	const handleAnswer = (option: QuizOption) => {
		setAnswersMap(currentQuestionIndex, option.rightAnswer)
	}

	const goToNextQuestion = () => {
		if (currentQuestionIndex === quizQuestions.length - 1) {
			setQuizCompleted(true)
		} else {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
		}
	}

	const resetQuiz = () => {
		setCurrentQuestionIndex(0)
		clearAnswersMap()
		setQuizCompleted(false)
	}

	const scorePercentage = ((score / quizQuestions.length) * 100).toFixed()

	console.log('scorePercentage', scorePercentage)
	return {
		currentQuestion,
		currentQuestionIndex,
		score,
		quizCompleted,
		scorePercentage,
		handleAnswer,
		goToNextQuestion,
		resetQuiz,
	}
}
