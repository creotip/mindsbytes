'use client'
import { Grid, GridProps } from '@chakra-ui/react'

export const Main = (props: GridProps) => {
	return (
		<Grid
			as="main"
			mt="6"
			gap="2.5rem"
			gridTemplateColumns={['1fr', '1fr', '1fr']}
			gridTemplateRows="1fr"
			px="1rem"
			{...props}
		/>
	)
}
