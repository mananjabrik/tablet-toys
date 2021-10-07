import React from 'react';
import { Box, Stack, Heading, Button } from '@chakra-ui/react';
import { Groups, GroupProps, Users } from '.';
import { UserProps, usersDTO } from '../../interface';
interface ContentsProps {
	onAddGroup?: () => void;
	dataGroup?: GroupProps[];
	dataUsers: usersDTO[];
}
export const Contents: React.FC<ContentsProps> = (props) => {
	return (
		<Box
			h="100vh"
			bg="#393939"
			position="fixed"
			w="full"
			zIndex="-1"
			pl="9rem"
			pt="4.6rem"
			color="white"
		>
			<Stack direction="row" spacing="0">
				<Stack
					spacing="1rem"
					flex={3}
					pt="3rem"
					px="3rem"
					overflowY="auto"
				>
					<Stack direction="row" spacing="2rem" align="center">
						<Heading>ROOMS</Heading>
						<Button
							border="1px solid white"
							bg="blackAlpha.100"
							_hover={{ bg: 'gray' }}
							onClick={props.onAddGroup}
						>
							+ Add New Group
						</Button>
					</Stack>
					<Groups
						//@ts-ignore
						dataGroup={props?.dataGroup ?? []}
					/>
				</Stack>
				<Box
					bg="#323232"
					flex={1}
					h="100vh"
					pt="3rem"
					justifyContent="center"
					display="flex"
				>
					<Users dataUser={props.dataUsers ?? []} />
				</Box>
			</Stack>
		</Box>
	);
};
