'use client'
import { useQuiz } from '@/hooks/use-quiz'
import { SingleQuiz } from '@/interfaces/quiz-interface'
import {
	Box,
	Heading,
	Button,
	VStack,
	Card,
	CardBody,
	StackDivider,
	Center,
	Grid,
	Radio,
} from '@chakra-ui/react'
import { Highlight, themes, Prism } from 'prism-react-renderer'
import QuizToolbar from './quiz-toolbar'
;(typeof global !== 'undefined' ? global : window).Prism = Prism
// await import('prismjs/components/prism-applescript')
/** or **/
require('prismjs/components/prism-python')

interface QuizProps {
	quizQuestions: SingleQuiz[]
	title: string
}

export const Quiz = ({ title, quizQuestions }: QuizProps) => {
	const {
		currentQuestion,
		currentQuestionIndex,
		answersIndexMap,
		scorePercentage,
		isQuizFinished,
		handleAnswer,
		goToNextQuestion,
		resetQuiz,
	} = useQuiz(quizQuestions)

	if (isQuizFinished) {
		return (
			<Center h="full">
				<VStack pos="relative">
					<Box
						filter="blur(55px)"
						backgroundImage="linear-gradient( -45deg, #572eab 30%, #906fda )"
						pos="absolute"
						top="0"
						left="0"
						w="100%"
						h="100%"
					></Box>
					<Box pos="relative" textAlign="center">
						<Box fontSize="3.5rem" fontWeight="900" letterSpacing="2px" mb="1rem">
							Quiz Finished
						</Box>
						<Box>Your score is {scorePercentage}%</Box>

						<Button
							mt="2rem"
							size="lg"
							onClick={() => {
								resetQuiz()
							}}
						>
							Restart Quiz
						</Button>
					</Box>
				</VStack>
			</Center>
		)
	}

	return (
		<>
			<QuizToolbar
				title={title}
				currentQuestionOutofTotal={`${currentQuestionIndex + 1} / ${quizQuestions.length}`}
				level={currentQuestion.level}
			/>
			<Box px="2rem" mt="2rem">
				<Heading as="h3" fontSize="18px" mb="2rem">
					{currentQuestion.question}
				</Heading>
				{currentQuestion.codeBlock && (
					<Grid gridAutoFlow="column" className="code-block-wrapper" mb="2rem">
						<Highlight
							theme={themes.nightOwl}
							code={currentQuestion.codeBlock}
							language={currentQuestion.language.toLowerCase()}
						>
							{({ style, tokens, getLineProps, getTokenProps }) => (
								<Box
									as="pre"
									style={style}
									overflow="auto"
									fontSize="14px"
									p="2rem"
									borderRadius="7px"
								>
									<Box as="code">
										{tokens.map((line, i) => (
											<div key={i} {...getLineProps({ line })}>
												{line.map((token, key) => (
													<span key={key} {...getTokenProps({ token })} />
												))}
											</div>
										))}
									</Box>
								</Box>
							)}
						</Highlight>
					</Grid>
				)}
				<Card mb="2rem">
					<CardBody p="0">
						<VStack spacing={0} align="stretch" divider={<StackDivider />}>
							{currentQuestion.options.map((option, i) => (
								<Button
									key={i}
									onClick={() => handleAnswer(option, i)}
									variant="ghost"
									justifyContent="flex-start"
									px={6}
									py={6}
									textAlign="left"
									fontSize="15px"
									fontWeight="400"
									h="auto"
									whiteSpace="normal"
									_hover={{ opacity: '0.9' }}
								>
									<Radio
										size="lg"
										name="1"
										colorScheme="purple"
										isChecked={answersIndexMap.get(currentQuestionIndex) === i}
									></Radio>
									<Box as="span" mx="1rem">
										{option.answer}
									</Box>
								</Button>
							))}
						</VStack>
					</CardBody>
				</Card>
				<Button
					onClick={() => goToNextQuestion()}
					colorScheme="purple"
					borderRadius="6px"
					fontSize="15px"
					minW="220px"
					mb="2rem"
					isDisabled={answersIndexMap.get(currentQuestionIndex) === undefined}
				>
					Next
				</Button>
			</Box>
		</>
	)
}
