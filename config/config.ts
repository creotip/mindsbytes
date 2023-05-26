export const config = {
	seo: {
		siteName: 'MindsBytes',
		title: 'MindsBytes - Make Learning Fun With Quizzes',
		alternativeTitle: 'MindsBytes - Explore, Learn, and Have Fun with Quizzes',
		description:
			'Boost your coding skills with JavaScript, Python, Go, React, Rust, and more. Dive into quizzes covering Math, CS, Data Science, AI, and more. Explore engaging quizzes challenging your knowledge',
		alternativeDescription:
			'Elevate coding skills with JavaScript, Python, Go, React, Rust, and more. Immerse in quizzes spanning Math, CS, Data Science, AI, and more. Engage in challenging quizzes to expand your knowledge.',
		url: 'https://mindsbytes.com',
	},
	db: {
		quizzes: {
			'math-general':
				'https://mindsbytes-default-rtdb.europe-west1.firebasedatabase.app/quizzes/math-general.json',
			'javascript-general':
				'https://mindsbytes-default-rtdb.europe-west1.firebasedatabase.app/quizzes/javascript-general.json',
			'python-general':
				'https://mindsbytes-default-rtdb.europe-west1.firebasedatabase.app/quizzes/python-general.json',
		},
	},
	quizList: [
		{ title: 'Mathematics', children: null },
		{ title: 'Computer Science', children: null },
		{ title: 'Front-End', children: null },
		{ title: 'Back-End', children: null },
		{ title: 'Data Science', children: null },
		{ title: 'DevOps', children: null },
		{ title: 'Network', children: null },
		{ title: 'Cyber Security', children: null },
		{ title: 'Quality Assurance', children: null },
		{ title: 'Blockchain', children: null },
		{
			title: 'Programming Languages',
			children: [
				{ title: 'Javascript', children: null },
				{ title: 'TypeScript', children: null },
				{ title: 'Python', children: null },
				{ title: 'HTML', children: null },
				{ title: 'CSS', children: null },
				{ title: 'Java', children: null },
				{ title: 'Kotlin', children: null },
				{ title: 'Swift', children: null },
				{ title: 'SQL', children: null },
				{ title: 'NoSQL', children: null },
				{ title: 'C#', children: null },
				{ title: 'Rust', children: null },
			],
		},
		{ title: 'Javascript', children: null },
		{ title: 'TypeScript', children: null },
		{ title: 'Python', children: null },
		{ title: 'HTML', children: null },
		{ title: 'CSS', children: null },
		{ title: 'Java', children: null },
		{ title: 'Kotlin', children: null },
		{ title: 'Swift', children: null },
		{ title: 'SQL', children: null },
		{ title: 'NoSQL', children: null },
		{ title: 'C#', children: null },
		{ title: 'Rust', children: null },
	],
}
