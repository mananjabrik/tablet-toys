import React from 'react';
import { Box, Text, Wrap, WrapItem, Stack, Icon } from '@chakra-ui/react';
import { User } from '.';
import { usersDTO } from '../../interface';

interface UsersProps {
	dataUser?: usersDTO[];
}
export const Users: React.FC<UsersProps> = (props) => {
	return (
		<Box w="20rem">
			<Text mb="5">LIST OF CONNECTED PLATYERS( 4 )</Text>
			<Box maxH="20rem" overflow="auto" px="1rem" py="1rem">
				<Wrap>
					{props.dataUser?.map((user, idx) => {
						return (
							<WrapItem w="full" key={idx}>
								<User
									name={user.name}
									id={user.id}
									email={user.email}
									username={user.username}
								/>
							</WrapItem>
						);
					})}
				</Wrap>
			</Box>
		</Box>
	);
};
