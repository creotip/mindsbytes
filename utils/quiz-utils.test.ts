// Assuming you have imported the necessary dependencies and defined the function

describe('getFilteredQuestions', () => {
	const questions = [
		{
			question: 'Question 1',
			category: 'Category A',
			level: 'Easy',
		},
		{
			question: 'Question 2',
			category: 'Category B',
			level: 'Medium',
		},
		{
			question: 'Question 3',
			category: 'Category A',
			level: 'Hard',
		},
	]

	it('should filter questions by category', () => {
		const filtered = getFilteredQuestions(questions).filterByCategory('Category A').getResults()
		expect(filtered.length).toBe(2)
		expect(filtered[0].question).toBe('Question 1')
		expect(filtered[1].question).toBe('Question 3')
	})

	it('should filter questions by level', () => {
		const filtered = getFilteredQuestions(questions).filterByLevel(['Easy', 'Medium']).getResults()
		expect(filtered.length).toBe(2)
		expect(filtered[0].question).toBe('Question 1')
		expect(filtered[1].question).toBe('Question 2')
	})

	// Add more test cases as needed
})
