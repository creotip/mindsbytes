'use client'
import { useQuiz } from '@/hooks/use-quiz'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import { Box, Heading, Button, Code, VStack } from '@chakra-ui/react'
import { Highlight, themes } from 'prism-react-renderer'

interface QuizProps {
	quizQuestions: SingleQuiz[]
	title: string
}

export const Quiz = ({ title, quizQuestions }: QuizProps) => {
	const {
		currentQuestion,
		currentQuestionIndex,
		score,
		scorePercentage,
		quizCompleted,
		handleAnswer,
		resetQuiz,
	} = useQuiz(quizQuestions)

	console.log('currentQuestion', {
		currentQuestion,
		currentQuestionIndex,
		score,
		scorePercentage,
		quizCompleted,
		handleAnswer,
		resetQuiz,
	})
	return (
		<Box px="2rem">
			<Heading as="h2" fontSize="1.4rem" textAlign="center" my="2rem">
				{title} Quiz{' '}
			</Heading>

			<Box mb="2rem">{currentQuestion.question}</Box>

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

			<Button
				onClick={() => handleAnswer(currentQuestion.options[0])}
				colorScheme="blue"
				borderRadius="6px"
				fontSize="15px"
				minW="220px"
			>
				Next
			</Button>
		</Box>
	)
}
