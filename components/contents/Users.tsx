import React from 'react';
import { Box, Text, Wrap, WrapItem, Stack, Icon } from '@chakra-ui/react';
import { User } from '.';
import { UserProps } from '../../interface';

interface UsersProps {
	dataUser?: UserProps[];
}
export const Users: React.FC<UsersProps> = (props) => {
	return (
		<Box>
			<Text mb="5">LIST OF CONNECTED PLATYERS( 4 )</Text>
			<Wrap>
				{props.dataUser?.map((user, idx) => {
					return (
						<WrapItem w="full" key={idx}>
							<User icon={user.icon} name={user.name} />
						</WrapItem>
					);
				})}
			</Wrap>
		</Box>
	);
};
