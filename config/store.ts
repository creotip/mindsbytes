import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface QuizStoreState {
	isQuizActive: boolean
	setQuizActive: (isActive: boolean) => void
	currentQuizType: string
	setCurrentQuizTypeTitle: (quizType: string) => void
}
interface UIStoreState {
	isDrawerOpen: boolean
	setDrawer: (isActive: boolean) => void
}

export const useQuizStore = create<QuizStoreState>()(
	devtools<QuizStoreState>((set) => ({
		isQuizActive: false,
		setQuizActive: (isActive: boolean) => set({ isQuizActive: isActive }),
		currentQuizType: '',
		setCurrentQuizTypeTitle: (quizType: string) => set({ currentQuizType: quizType }),
	}))
)

export const useUIStore = create<UIStoreState>()(
	devtools<UIStoreState>((set) => ({
		isDrawerOpen: false,
		setDrawer: (isActive: boolean) => set({ isDrawerOpen: isActive }),
	}))
)
