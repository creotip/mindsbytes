'use client'
import type { SingleQuiz } from '@/interfaces/quiz-interface'
import {
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Stack,
	VStack,
	FormErrorMessage,
	FormLabel,
	FormControl,
	Text,
} from '@chakra-ui/react'
import { useQuizStore } from '@/config/store'
import { Quiz } from '@/components/quiz/quiz'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getFilteredQuestions } from '@/utils/quiz-utils'

interface WrapperProps {
	quizQuestions: SingleQuiz[]
	title: string
	longDescription: string
}

type Inputs = {
	level: string[]
	category: string
}

export const QuizWrapper = ({ quizQuestions, title, longDescription }: WrapperProps) => {
	const { isQuizActive, setQuizActive, setCurrentQuizTypeTitle, setCategory, setLevel } =
		useQuizStore((state) => state)

	const [filteredQuestions, setFilteredQuestions] = useState<SingleQuiz[]>(quizQuestions)

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		watch,
		reset,
	} = useForm<Inputs>()

	const levels = new Set(quizQuestions.map((q) => q.level))
	const selectedLevels = watch('level')

	function onSubmit(values: Record<string, any>) {
		if (!isQuizActive) {
			setLevel(values.level)
			setCategory(values.category)
			setCurrentQuizTypeTitle(title)
			setQuizActive(true)
		}
	}

	useEffect(() => {
		return () => {
			setQuizActive(false)
			setCurrentQuizTypeTitle('')
			setLevel([])
		}
	}, [setCurrentQuizTypeTitle, setLevel, setQuizActive])

	useEffect(() => {
		reset({ level: ['all'], category: 'all' })
	}, [reset])

	useEffect(() => {
		if (selectedLevels) {
			const filteredQuestions = getFilteredQuestions(quizQuestions)
				.filterByLevel(selectedLevels)
				.shuffle()
				.getItemsByNumber(25)

			setFilteredQuestions(filteredQuestions)
		}
	}, [watch, quizQuestions, selectedLevels])

	if (isQuizActive) {
		console.log('filteredQuestions', filteredQuestions)
		return <Quiz title={title} quizQuestions={filteredQuestions} />
	}

	return (
		<>
			<Heading as="h1" textAlign="center" my="2rem">
				{title} Quiz
			</Heading>

			<Text px={['1rem', '1rem', '2rem']} mb="2rem" color="gray.400">
				{longDescription}
			</Text>

			<VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="3rem" pb="40px">
				<FormControl isInvalid={!!errors.level} w="auto">
					<FormLabel htmlFor="level" textAlign="center" mb={1} fontWeight="600">
						Choose Level
					</FormLabel>

					<CheckboxGroup colorScheme="purple" defaultValue={Array.from(levels)}>
						<Stack spacing={[1, 5]} direction={['column', 'row']}>
							{/* <Checkbox
								value="all"
								{...register('level', {
									required: 'Please select at least one level',
								})}
							>
								All
							</Checkbox> */}
							{Array.from(levels).map((level) => (
								<Checkbox
									key={level}
									value={level}
									{...register('level', {
										required: 'Please select at least one level',
									})}
								>
									{level}
								</Checkbox>
							))}
						</Stack>
					</CheckboxGroup>
					<FormErrorMessage>{errors.level && errors.level.message}</FormErrorMessage>
				</FormControl>

				{/* <FormControl isInvalid={!!errors.category} w="auto">
					<FormLabel htmlFor="category" textAlign="center" mb={1} fontWeight="600">
						Choose Category
					</FormLabel>
					<Select textTransform="capitalize" defaultValue="all" {...register('category')}>
						<option value="all">All</option>
						{Array.from(categories).map((cat, index) => (
							<option key={index} value={cat}>
								{cat}
							</option>
						))}
					</Select>
				</FormControl> */}

				{/* <Box>{filteredQuestions.length} Questions</Box> */}
				<Button
					isLoading={isSubmitting}
					type="submit"
					colorScheme="purple"
					borderRadius="6px"
					fontSize="15px"
					minW="220px"
				>
					Start Quiz
				</Button>
			</VStack>
		</>
	)
}
