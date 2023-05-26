import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { HolyGrail } from '@/components/layout/holy-grail'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { Content } from '@/components/layout/content'

export const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<html lang="en">
				<body className={inter.className}>
					<Providers>
						<HolyGrail>
							<Header />
							<Main>
								<Sidebar />
								<Content>{children}</Content>
							</Main>
							<Footer />
						</HolyGrail>
					</Providers>
				</body>
			</html>
		</>
	)
}
