import { HomeContent } from '@/components/home-content'
import { config } from '@/config/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: config.seo.title,
	description: config.seo.description,
}

export default function Home() {
	return (
		<>
			<HomeContent />
		</>
	)
}
