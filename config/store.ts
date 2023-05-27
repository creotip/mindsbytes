import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface QuizStoreState {
	isQuizActive: boolean
	setQuizActive: (isActive: boolean) => void
	currentQuizType: string
	setCurrentQuizTypeTitle: (quizType: string) => void
	level: string[]
	setLevel: (newLevels: string[]) => void
	category: string
	setCategory: (category: string) => void
	isQuizFinished: boolean
	setQuizFinished: (isFinished: boolean) => void
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
		level: [],
		setLevel: (newLevels: string[]) => set({ level: newLevels }),
		category: '',
		setCategory: (category: string) => set({ category }),
		isQuizFinished: false,
		setQuizFinished: (isFinished: boolean) => set({ isQuizFinished: isFinished }),
	}))
)

export const useUIStore = create<UIStoreState>()(
	devtools<UIStoreState>((set) => ({
		isDrawerOpen: false,
		setDrawer: (isActive: boolean) => set({ isDrawerOpen: isActive }),
	}))
)
