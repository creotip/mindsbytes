'use client'
import {
	Box,
	List,
	ListItem,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { usePathname } from 'next/navigation'
import { config } from '@/config/config'

interface CustomLinkProps {
	href: string
	title: string
}
const CustomLink = ({ href, title }: CustomLinkProps) => {
	return (
		<Link href={href} _hover={{ color: 'purple.300' }}>
			{title}
		</Link>
	)
}
export const QuizList = () => {
	const pathname = usePathname()

	return (
		<List spacing={3}>
			<ListItem>
				<CustomLink title="Mathematics" href="/quizzes/math" />
			</ListItem>
			<ListItem>Computer Science</ListItem>
			<ListItem>Front-End</ListItem>
			<ListItem>Back-End</ListItem>
			<ListItem>Data Science</ListItem>
			<ListItem>DevOps</ListItem>
			<ListItem>Network</ListItem>
			<ListItem>Cyber Security</ListItem>
			<ListItem>Quality Assurance</ListItem>
			<ListItem>Blockchain</ListItem>
			<ListItem>
				<Accordion allowToggle>
					<AccordionItem border="none">
						<AccordionButton fontSize="14px" fontWeight="600" p={0}>
							<Box as="span" flex="1" textAlign="left">
								Programming Languages
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							<List spacing={3}>
								<ListItem>
									<CustomLink title="Javascript" href="/quizzes/javascript" />
								</ListItem>
								<ListItem>TypeScript</ListItem>
								<ListItem>
									<CustomLink title="Python" href="/quizzes/python" />
								</ListItem>
								<ListItem>HTML</ListItem>
								<ListItem>CSS</ListItem>
								<ListItem>Java</ListItem>
								<ListItem>Kotlin</ListItem>
								<ListItem>Swift</ListItem>
								<ListItem>SQL</ListItem>
								<ListItem>NoSQL</ListItem>
								<ListItem>C#</ListItem>
								<ListItem>Rust</ListItem>
								<ListItem>Go</ListItem>
								<ListItem>C</ListItem>
								<ListItem>C++</ListItem>
								<ListItem>PHP</ListItem>
								<ListItem>Ruby</ListItem>
								<ListItem>Matlab</ListItem>
								<ListItem>Perl</ListItem>
								<ListItem>Scala</ListItem>
							</List>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</ListItem>
		</List>
	)
}
