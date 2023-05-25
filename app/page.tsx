import { HomeContent } from '@/components/home-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'MindsBytes - Make Learning Fun With Quizzes',
	description: `Explore, Learn, and Have Fun with Quizzes at MindsBytes.com. Expand Your Knowledge, Challenge Yourself`,
}

export default function Home() {
	return (
		<>
			<HomeContent />
		</>
	)
}
