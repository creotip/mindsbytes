'use client'
import { config } from '@/config/config'
import { Box, Button, Center, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import {
	SiCplusplus,
	SiCsharp,
	SiCss3,
	SiGo,
	SiHtml5,
	SiJavascript,
	SiKotlin,
	SiMongodb,
	SiMysql,
	SiPerl,
	SiPhp,
	SiPython,
	SiRuby,
	SiRust,
	SiScala,
	SiSwift,
	SiTypescript,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const quizMapIcons = [
	{ title: 'Javascript', icon: <SiJavascript /> },
	{ title: 'TypeScript', icon: <SiTypescript /> },
	{ title: 'Python', icon: <SiPython /> },
	{ title: 'HTML', icon: <SiHtml5 /> },
	{ title: 'CSS', icon: <SiCss3 /> },
	{ title: 'Java', icon: <FaJava /> },
	{ title: 'Kotlin', icon: <SiKotlin /> },
	{ title: 'Swift', icon: <SiSwift /> },
	{ title: 'MySQL', icon: <SiMysql /> },
	{ title: 'MongoDB', icon: <SiMongodb /> },
	{ title: 'C#', icon: <SiCsharp /> },
	{ title: 'Rust', icon: <SiRust /> },
	{ title: 'Go', icon: <SiGo /> },
	{ title: 'C', icon: <SiCplusplus /> },
	{ title: 'C++', icon: <SiCplusplus /> },
	{ title: 'PHP', icon: <SiPhp /> },
	{ title: 'Ruby', icon: <SiRuby /> },
	{ title: 'Perl', icon: <SiPerl /> },
	{ title: 'Scala', icon: <SiScala /> },
]

export function HomeContent() {
	return (
		<Box className="home-content" px="1rem">
			<Heading
				as="h1"
				fontSize={['2rem', '2rem', '3rem']}
				textAlign="center"
				my="2rem"
				bg="-webkit-linear-gradient(45deg, #ffffff, #cbbcff)"
				backgroundClip="text"
			>
				<span>Make</span> Learning Fun With Quizzes
			</Heading>

			<Text color="gray.400" textAlign="center" mb="2rem">
				{config.seo.alternativeDescription}
			</Text>

			<SimpleGrid columns={[1, 1, 1, 3]} gap="25px" mb="3rem">
				<Box p="20px" border="1px solid" borderColor="gray.600" borderRadius="7px">
					<Heading as="h2" fontSize="1rem" mb="1rem">
						No Registration Required
					</Heading>
					<Text color="gray.400">Start quizzing instantly without the need for registration.</Text>
				</Box>
				<Box p="20px" border="1px solid" borderColor="gray.600" borderRadius="7px">
					<Heading as="h2" fontSize="1rem" mb="1rem">
						Wide Range of Quizzes
					</Heading>
					<Text color="gray.400">
						Explore an extensive collection of quizzes across various topics and interests.
					</Text>
				</Box>
				<Box p="20px" border="1px solid" borderColor="gray.600" borderRadius="7px">
					<Heading as="h2" fontSize="1rem" mb="1rem">
						User-Friendly Interface
					</Heading>
					<Text color="gray.400">
						Enjoy a seamless and intuitive user interface that makes quiz-taking a breeze.
					</Text>
				</Box>
			</SimpleGrid>

			<Heading as="h2" textAlign="center" fontSize="2xl" mb="2rem">
				Programming languages quizzes
			</Heading>
			<SimpleGrid columns={[4, 4, 4, 8]} spacing="1rem">
				{quizMapIcons.map((quiz, index) => (
					<Button
						variant="ghost"
						display="flex"
						key={index}
						p={['10px', '1rem']}
						border="1px solid"
						borderColor="gray.600"
						borderRadius="7px"
						textAlign="center"
						flexDir="column"
						h="auto"
					>
						<Box fontSize={['20px', '40px']} mb="10px">
							{quiz.icon}
						</Box>
						<Text color="gray.400" fontSize={['10px', 'xs', 'xs']}>
							{quiz.title}
						</Text>
					</Button>
				))}
			</SimpleGrid>
		</Box>
	)
}
