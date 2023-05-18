'use client'
import { Grid, GridProps } from '@chakra-ui/react'

export const Footer = (props: GridProps) => {
	return (
		<Grid as="footer" justifyContent="center" py="2rem">
			MindsBytes@2023
		</Grid>
	)
}
