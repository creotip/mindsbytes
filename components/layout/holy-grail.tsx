'use client'
import { Grid } from '@chakra-ui/react'

export const HolyGrail = (props) => {
	return (
		<Grid
			className="holy-grail"
			gridTemplateColumns="1fr"
			gridTemplateRows="auto 1fr auto"
			gridRowGap="1rem"
			minH="100vh"
			{...props}
		/>
	)
}
