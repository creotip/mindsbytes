'use client'
import { config } from '@/config/config'
import { quizMap } from '@/utils/quiz-map'
import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { CustomLink } from './custom-link'

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
				{quizMap.map((quizMapItem, index) => (
					<Button
						as={CustomLink}
						href={quizMapItem.path}
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
							{quizMapItem.icon}
						</Box>
						<Text color="gray.400" fontSize={['10px', 'xs', 'xs']}>
							{quizMapItem.title}
						</Text>
					</Button>
				))}
			</SimpleGrid>
		</Box>
	)
}
