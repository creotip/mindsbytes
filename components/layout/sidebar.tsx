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

export const Sidebar = () => {
	const pathname = usePathname()

	return (
		<Box
			as="aside"
			overflowY="hidden"
			height="calc(100vh - 200px)"
			// style={{
			// 	'scrollbar-gutter': 'stable',
			// }}
			border="1px solid #333f57"
			p="20px"
			borderRadius="7px"
			_hover={{
				overflowY: 'scroll',
			}}
		>
			<Box as="nav" fontSize="14px" fontWeight="600">
				{/*<Box color="cyan.600" fontWeight="600" mb="4">*/}
				{/*	Quizzes*/}
				{/*</Box>*/}
				<List spacing={3}>
					<ListItem>
						<Link href="/quizzes/math" _hover={{ color: 'purple.300' }}>
							Mathematics
						</Link>
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
											<Link
												href="/quizzes/javascript"
												color="blue.400"
												_hover={{ color: 'blue.500' }}
											>
												Javascript
											</Link>
										</ListItem>
										<ListItem>TypeScript</ListItem>
										<ListItem>Python</ListItem>
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
			</Box>
		</Box>
	)
}
