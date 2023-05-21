'use client'
import { useQuiz } from '@/hooks/use-quiz'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import {
	Box,
	Heading,
	Button,
	Text,
	VStack,
	Card,
	CardBody,
	CardHeader,
	Stack,
	StackDivider,
	Center,
} from '@chakra-ui/react'
import { Highlight, themes } from 'prism-react-renderer'

interface QuizProps {
	quizQuestions: SingleQuiz[]
	title: string
}

const Option = ({ text }: any) => {
	return (
		<Button
			variant="ghost"
			justifyContent="flex-start"
			px={4}
			py={2}
			textAlign="left"
			_hover={{ opacity: '0.9' }}
		>
			<Text>{text}</Text>
		</Button>
	)
}

export const Quiz = ({ title, quizQuestions }: QuizProps) => {
	const {
		currentQuestion,
		currentQuestionIndex,
		score,
		scorePercentage,
		quizCompleted,
		handleAnswer,
		goToNextQuestion,
		resetQuiz,
	} = useQuiz(quizQuestions)

	// console.log('currentQuestion', {
	// 	currentQuestion,
	// 	currentQuestionIndex,
	// 	score,
	// 	scorePercentage,
	// 	quizCompleted,
	// 	handleAnswer,
	// 	resetQuiz,
	// })

	if (quizCompleted) {
		return (
			<Center h="full">
				<VStack>
					<Box>Quiz finished!</Box>
					<Box>Your score is %{scorePercentage}</Box>
				</VStack>
			</Center>
		)
	}

	return (
		<Box px="2rem">
			<Heading as="h2" fontSize="1.4rem" textAlign="center" my="2rem">
				{title} Quiz{' '}
			</Heading>

			<Heading as="h3" fontSize="18px" mb="2rem">
				{currentQuestion.question}
			</Heading>

			{currentQuestion.codeBlock && (
				<Box mb="2rem">
					<Highlight
						theme={themes.nightOwl}
						code={currentQuestion.codeBlock}
						language={currentQuestion.language.toLowerCase()}
					>
						{({ className, style, tokens, getLineProps, getTokenProps }) => (
							<Box as="pre" style={style} p="2rem" borderRadius="7px">
								{tokens.map((line, i) => (
									<div key={i} {...getLineProps({ line })}>
										{line.map((token, key) => (
											<span key={key} {...getTokenProps({ token })} />
										))}
									</div>
								))}
							</Box>
						)}
					</Highlight>
				</Box>
			)}

			<Card mb="2rem">
				<CardBody>
					<VStack spacing={4} align="stretch" divider={<StackDivider />}>
						{currentQuestion.options.map((option, i) => (
							<Button
								onClick={() => handleAnswer(option)}
								key={i}
								variant="ghost"
								justifyContent="flex-start"
								px={4}
								py={2}
								textAlign="left"
								fontSize="15px"
								fontWeight="400"
								h="auto"
								whiteSpace="normal"
								_hover={{ opacity: '0.9' }}
							>
								{option.answer}
							</Button>
						))}
					</VStack>
				</CardBody>
			</Card>

			<Button
				onClick={() => goToNextQuestion()}
				colorScheme="blue"
				borderRadius="6px"
				fontSize="15px"
				minW="220px"
				mb="2rem"
			>
				Next
			</Button>
		</Box>
	)
}
