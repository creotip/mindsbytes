import { Link, LinkProps } from '@chakra-ui/next-js'
import { useQuizStore, useUIStore } from '@/config/store'

interface CustomLinkProps extends LinkProps {
	href: string
	title: string
}
export const CustomLink = ({ href, title, ...props }: CustomLinkProps) => {
	const { setDrawer } = useUIStore((state) => state)
	const { isQuizActive } = useQuizStore((state) => state)

	return (
		<Link onClick={() => setDrawer(false)} href={href} _hover={{ color: 'purple.300' }} {...props}>
			{title}
		</Link>
	)
}
