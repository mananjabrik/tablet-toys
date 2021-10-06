import React from 'react';
import { Box } from '@chakra-ui/react';
export const Footer = () => {
	return (
		<Box
			position="fixed"
			w="full"
			bottom="0"
			bg="blue.300"
			p="1rem"
			px="2rem"
			color="white"
		>
			&copy; 2020-2021 Tabletoys Indonesia | Credits | Help
		</Box>
	);
};
