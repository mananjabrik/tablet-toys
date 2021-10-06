import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
export const Contents = () => {
	return (
		<Box
			h="100vh"
			bg="#393939"
			position="fixed"
			w="full"
			zIndex="-1"
			pl="9rem"
			pt="4.6rem"
			overflowY="scroll"
		>
			<Stack direction="row">
				<Box bg="#484848" flex={3}>
					halo boss
				</Box>
				<Box bg="#323232" flex={1}>
					halo boss
				</Box>
			</Stack>
		</Box>
	);
};
