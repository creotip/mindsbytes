import { SingleQuiz } from '@/interfaces/quiz-interface'

interface FilteredQuestionsChain extends Array<SingleQuiz> {
	filterByCategory(category: string | string[]): FilteredQuestionsChain
	filterByLevel(levels: string[]): FilteredQuestionsChain
	shuffle(): FilteredQuestionsChain
	getItemsByNumber(numberOfItems: number): FilteredQuestionsChain
}

export const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5)

export const getFilteredQuestions = (questions: SingleQuiz[]): FilteredQuestionsChain => {
	let filteredQuestions = [...questions]

	const chainableMethods = {
		filterByCategory(category: string | string[]): FilteredQuestionsChain {
			return getFilteredQuestions(
				filteredQuestions.filter((question) =>
					Array.isArray(question.category)
						? (question.category as string[]).some((cat) => (category as string[]).includes(cat))
						: (category as string[]).includes(question.category)
				)
			)
		},
		filterByLevel(levels: string[]): FilteredQuestionsChain {
			return getFilteredQuestions(
				filteredQuestions.filter((question) => levels.includes(question.level))
			)
		},
		shuffle(): FilteredQuestionsChain {
			return getFilteredQuestions(shuffleArray(filteredQuestions))
		},
		getItemsByNumber(numberOfItems: number): FilteredQuestionsChain {
			return getFilteredQuestions(filteredQuestions.slice(0, numberOfItems))
		},
	}

	return Object.assign(filteredQuestions, chainableMethods)
}
