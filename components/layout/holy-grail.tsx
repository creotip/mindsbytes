'use client'
import { Grid, GridProps } from '@chakra-ui/react'

export const HolyGrail = (props: GridProps) => {
	return (
		<Grid
			className="holy-grail"
			gridTemplateColumns="1fr"
			gridTemplateRows="auto 1fr auto"
			gridRowGap="1rem"
			minH="100vh"
			maxW="90rem"
			mx="auto"
			{...props}
		/>
	)
}
