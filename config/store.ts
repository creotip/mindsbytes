import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useQuizStore = create(
	devtools((set) => ({
		isQuizActive: false,
		setQuizActive: (isActive: boolean) => set({ isQuizActive: isActive }),
		currentQuizType: '',
		setCurrentQuizTypeTitle: (quizType: string) => set({ currentQuizType: quizType }),
	}))
)
