import { QuizOption, SingleQuiz } from '@/interfaces/quiz-interface'
import { useEffect, useState } from 'react'

const shuffle = (array: any[]) => {
	const _array = [...array]
	for (let i = _array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		const temp = _array[i]
		_array[i] = _array[j]
		_array[j] = temp
	}

	return _array
}

export const useQuiz = (quizQuestions: SingleQuiz[]) => {
	const [completed, setCompleted] = useState(0)
	const [quizLength, setQuizLength] = useState(quizQuestions.length)
	const [activeStep, setActiveStep] = useState(1)
	const [questionIndex, setQuestionIndex] = useState(0)
	const [userResponses, setUserResponses] = useState(new Array(quizQuestions.length).fill(null))
	const [rightAnswersIdx, setRightAnswersIdx] = useState([])
	const [score, setScore] = useState(0)
	const [quiz, setQuiz] = useState<SingleQuiz[]>([])
	const [toast, setToast] = useState(null)
	const [colorMode, setColorMode] = useState('light')
	const [hoverAnswer, setHoverAnswer] = useState('gray.200')

	useEffect(() => {
		setQuiz(shuffle(quizQuestions))
	}, [quizQuestions])

	useEffect(() => {
		// setToast(useToast())
		// setColorMode(useColorMode().colorMode)
		// setHoverAnswer(useColorModeValue('gray.200', '#2c323d'))
	}, [])

	const handleNext = () => {
		const answerIndex = userResponses[questionIndex]

		// if (answerIndex === null) {
		// 	toast({
		// 		title: 'Choose an answer.',
		// 		status: 'warning',
		// 		duration: 3000,
		// 		isClosable: true,
		// 	})
		// 	return
		// }
		const totalPercent = 100 / quizLength

		if (quiz[questionIndex].options[answerIndex]?.rightAnswer) {
			setScore(score + 1)
		}
		if (userResponses[questionIndex] !== null) {
			setQuestionIndex(questionIndex + 1)
			setActiveStep(activeStep + 1)
			setCompleted(completed + totalPercent)
		}
	}

	const handleAnswer = (index: number) => {
		const updatedAnswers = [...userResponses]
		updatedAnswers[questionIndex] = index
		setUserResponses(updatedAnswers)
	}

	return {
		completed,
		quizLength,
		activeStep,
		questionIndex,
		userResponses,
		score,
		quiz,
		handleNext,
		handleAnswer,
		toast,
		colorMode,
		hoverAnswer,
	}
}

export default useQuiz
