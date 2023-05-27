import { QuizOption, SingleQuiz } from '@/interfaces/quiz-interface'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useMap } from './use-map'
import { useQuizStore } from '@/config/store'

export function useQuiz(quizQuestions: SingleQuiz[]) {
	const [answersMap, { set: setAnswersMap, clear: clearAnswersMap }] = useMap([])
	const [answersIndexMap, { set: setAnswersIndexMap, clear: clearAnswersIndexMap }] = useMap([])
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

	const { setQuizFinished, isQuizFinished, isQuizActive } = useQuizStore((state) => state)

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

	const handleAnswer = (option: QuizOption, index: number) => {
		setAnswersMap(currentQuestionIndex, option.rightAnswer)
		setAnswersIndexMap(currentQuestionIndex, index)
	}

	const goToNextQuestion = () => {
		if (currentQuestionIndex === quizQuestions.length - 1) {
			setQuizFinished(true)
		} else {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
		}
	}

	const resetQuiz = useCallback(() => {
		setCurrentQuestionIndex(0)
		clearAnswersMap()
		clearAnswersIndexMap()
		setQuizFinished(false)
	}, [clearAnswersIndexMap, clearAnswersMap, setQuizFinished])

	useEffect(() => {
		return () => {
			resetQuiz()
		}
	}, [resetQuiz])

	const scorePercentage = ((score / quizQuestions.length) * 100).toFixed()

	return {
		isQuizActive,
		currentQuestion,
		currentQuestionIndex,
		answersIndexMap,
		score,
		isQuizFinished,
		scorePercentage,
		handleAnswer,
		goToNextQuestion,
		resetQuiz,
	}
}
