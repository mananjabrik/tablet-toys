import React from 'react';
import { Box, Image } from '@chakra-ui/react';
export const Navbar = () => {
	return (
		<Box
			position="fixed"
			w="full"
			bg="#46a3db"
			p="1rem"
			px="2rem"
			shadow="lg"
		>
			<Image
				src="https://tabletoys.id/wp-content/uploads/2018/09/Colored3.png"
				alt="logo"
				w="3rem"
			/>
		</Box>
	);
};
