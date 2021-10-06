import React from 'react';
import { Box, Stack, Heading, Button, Text, Icon } from '@chakra-ui/react';
import { Group, GroupProps } from '.';
import { FaAddressBook, FaUser } from 'react-icons/fa';
interface ContentsProps {
	onAddGroup?: () => void;
	dataGroup?: GroupProps[];
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
						>
							+ Add New Group
						</Button>
					</Stack>
					<Group
						//@ts-ignore
						dataGroup={props.dataGroup ?? []}
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
					<Box>
						<Text mb="5">LIST OF CONNECTED PLATYERS( 4 )</Text>
						<Stack
							direction="row"
							align="center"
							bg="#46a3db"
							p="1"
							rounded="md"
						>
							<Icon
								as={FaUser}
								w="5"
								h="5"
								border="1px solid White"
								p="1"
								rounded="full"
							/>
							<Text>User Name</Text>
						</Stack>
					</Box>
				</Box>
			</Stack>
		</Box>
	);
};
