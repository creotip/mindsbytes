'use client'
import type { SingleQuiz } from '@/interfaces/quiz-interface'
import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Select,
	Stack,
	VStack,
} from '@chakra-ui/react'

interface WrapperProps {
	quiz: SingleQuiz[]
	title: string
}
export const QuizWrapper = ({ quiz, title }: WrapperProps) => {
	console.log('quiz', quiz)

	const levels = new Set(quiz.map((q) => q.level))
	const fields = new Set(quiz.map((q) => q.category))

	console.log('levels', levels)
	console.log('fields', fields)
	return (
		<>
			<Heading as="h2" textAlign="center" my="2rem">
				{title} Quiz
			</Heading>

			<VStack spacing="3rem" pb="40px">
				<Box>
					<Box textAlign="center" mb={1} fontWeight="600">
						Choose Level
					</Box>
					<CheckboxGroup colorScheme="purple" defaultValue={['all']}>
						<Stack spacing={[1, 5]} direction={['column', 'row']}>
							<Checkbox value="all">All</Checkbox>
							{[...levels].map((level) => (
								<Checkbox key={level} value={level}>
									{level}
								</Checkbox>
							))}
						</Stack>
					</CheckboxGroup>
				</Box>

				<Box>
					<Box textAlign="center" mb={1} fontWeight="600">
						Choose Category
					</Box>
					<Select defaultValue="All">
						<option value="All">All</option>
						{[...fields].map((field, index) => (
							<option key={index} value={field}>
								{field}
							</option>
						))}
					</Select>
				</Box>

				<Button colorScheme="blue" borderRadius="6px" fontSize="15px" minW="220px">
					Start Quiz
				</Button>
			</VStack>
		</>
	)
}
