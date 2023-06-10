export interface QuizOption {
	answer: string
	rightAnswer: boolean
	answerIsCode?: boolean
}

export interface SingleQuiz {
	question: string
	codeBlock?: string
	language: string
	level: string
	options: QuizOption[]
	category: string | string[]
}
