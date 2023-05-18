import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface QuizStoreState {
	isQuizActive: boolean
	setQuizActive: (isActive: boolean) => void
	currentQuizType: string
	setCurrentQuizTypeTitle: (quizType: string) => void
}

export const useQuizStore = create<QuizStoreState>()(
	devtools<QuizStoreState>((set) => ({
		isQuizActive: false,
		setQuizActive: (isActive: boolean) => set({ isQuizActive: isActive }),
		currentQuizType: '',
		setCurrentQuizTypeTitle: (quizType: string) => set({ currentQuizType: quizType }),
	}))
)
