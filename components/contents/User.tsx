import React from 'react';
import { Stack, Icon, Text } from '@chakra-ui/react';
import { usersDTO } from '../../interface/User';
import { FaUser } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { UsersState } from '../../state';

export const User: React.FC<usersDTO> = (props) => {
	const [usersData, setUsersData] = useRecoilState(UsersState);

	const handleUsers = () => {
		setUsersData({
			...usersData,
			[props?.id]: {
				...props,
			},
		});
		// console.log(props.name, props.id);
	};
	return (
		<Stack
			flex={1}
			direction="row"
			align="center"
			bg="#46a3db"
			p="1"
			rounded="md"
			cursor="pointer"
			onClick={handleUsers}
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
