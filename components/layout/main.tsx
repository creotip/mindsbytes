'use client'
import { Grid } from '@chakra-ui/react'

export const Main = (props) => {
	return (
		<Grid
			as="main"
			mt="6"
			gap="2.5rem"
			gridTemplateColumns="230px 1fr"
			gridTemplateRows="1fr"
			{...props}
		/>
	)
}
