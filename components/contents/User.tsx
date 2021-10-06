import React from 'react';
import { Stack, Icon, Text } from '@chakra-ui/react';
import { UserProps } from '../../interface/User';
import { FaUser } from 'react-icons/fa';

export const User: React.FC<UserProps> = (props) => {
	return (
		<Stack
			flex={1}
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
			<Text>{props.name}</Text>
		</Stack>
	);
};
