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
import { CustomLink } from '../custom-link'

export const QuizList = () => {
	return (
		<Box as="nav" fontSize="14px" fontWeight="600">
			<List spacing={3}>
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
										<CustomLink isSidebar href="/quizzes/javascript">
											Javascript
										</CustomLink>
									</ListItem>
									<ListItem>
										<CustomLink isSidebar href="/quizzes/typescript">
											TypeScript
										</CustomLink>
									</ListItem>
									<ListItem>
										<CustomLink isSidebar href="/quizzes/python">
											Python
										</CustomLink>
									</ListItem>
									<ListItem>HTML</ListItem>
									<ListItem>CSS</ListItem>
									<ListItem>Java</ListItem>
									<ListItem>Kotlin</ListItem>
									<ListItem>Swift</ListItem>
									<ListItem>MySQL</ListItem>
									<ListItem>MongoDB</ListItem>
									<ListItem>C#</ListItem>
									<ListItem>
										<CustomLink isSidebar href="/quizzes/rust">
											Rust
										</CustomLink>
									</ListItem>
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
				<ListItem>
					<CustomLink isSidebar href="/quizzes/math">
						Mathematics
					</CustomLink>
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
			</List>
		</Box>
	)
}
