'use client'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'

export function HomeContent() {
	return (
		<Box className="home-content" px="1rem">
			{/* <Heading as="h2" fontSize="2rem" textAlign="left" my="2rem">
				MindsBytes
			</Heading> */}
			<Heading as="h1" fontSize="3rem" textAlign="center" my="2rem">
				Make Learning Fun With Quizzes
			</Heading>

			<Text color="gray.400" textAlign="center" mb="2rem">
				Explore, Learn, and Have Fun with Quizzes at MindsBytes.com. <br /> Expand Your Knowledge,
				Challenge Yourself, and Join the Quizzing Community Today!
			</Text>

			<SimpleGrid columns={[1, 1, 1, 3]} gap="25px">
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
		</Box>
	)
}
