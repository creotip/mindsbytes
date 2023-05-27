import { Link, LinkProps } from '@chakra-ui/next-js'
import { useQuizStore, useUIStore } from '@/config/store'
import { usePathname, useRouter } from 'next/navigation'

interface CustomLinkProps extends LinkProps {
	href: string
	title: string
}
export const CustomLink = ({ href, title, ...props }: CustomLinkProps) => {
	const { setDrawer } = useUIStore((state) => state)
	const { isQuizActive } = useQuizStore((state) => state)
	const pathname = usePathname()
	const isActiveLink = pathname.startsWith(href)
	const router = useRouter()

	const handleClick = (e: any) => {
		if (isQuizActive && confirm('You have an active quiz. Are you sure you want to leave?')) {
			router.push(href)
		}

		setDrawer(false)
	}
	return (
		<Link
			onClick={handleClick}
			href={href}
			color={isActiveLink ? 'purple.300' : 'initial'}
			_hover={{ color: 'purple.300' }}
			{...props}
		>
			{title}
		</Link>
	)
}
