import type { NextPage } from 'next';
import {
	Box,
	useDisclosure,
	Stack,
	FormControl,
	FormLabel,
	Input,
	Text,
} from '@chakra-ui/react';
import { FaCog, FaUsers, FaPuzzlePiece, FaUser } from 'react-icons/fa';
import { Layout, Contents, ModalAddGroup, User } from '../components';
import { useRecoilState } from 'recoil';
import { UsersState } from '../state';
import { useUsersQuery } from '../query';

const Home: NextPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [usersData] = useRecoilState(UsersState);
	const { data: users } = useUsersQuery();
	console.log(Object.values(usersData));

	const dataMenu = [
		{
			title: 'Lobby',
			icon: FaCog,
			active: 0,
		},
		{
			title: 'Group',
			icon: FaUsers,
			active: 1,
		},
		{
			title: 'Puzzle',
			icon: FaPuzzlePiece,
			active: 0,
		},
	];

	const dataGroup = [
		{
			titleGroup: 'group 1 ( Pendaki )',
			users: ['manan', 'H salim', 'P Slamet'],
		},
		{
			titleGroup: 'group 2 ( Panjat Tebing )',
			users: ['muslim', 'wes', 'mustofa'],
		},
	];
	const dataUsers = [
		{
			icon: FaUser,
			name: 'hasbulla',
		},
		{
			icon: FaUser,
			name: 'habibun',
		},
		{
			icon: FaUser,
			name: 'asmad',
		},
	];
	return (
		<Box>
			<Layout menu={dataMenu}>
				<Contents
					//@ts-ignore
					dataGroup={dataGroup ?? []}
					dataUsers={users ?? []}
					onAddGroup={onOpen}
				/>
			</Layout>
			<ModalAddGroup isOpen={isOpen} onClose={onClose}>
				<Stack direction="row">
					<Box flex={1}>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input placeholder="add new group"></Input>
						</FormControl>
					</Box>
					<Box flex={1}>
						{/* <Text>Select Team</Text>
						<Box mt="1">
							<User name="manan" />
						</Box>
						<Box mt="1">
							<User name="manan" />
						</Box>
						<Box mt="1">
							<User name="manan" />
						</Box>
						<Box mt="1">
							<User name="manan" />
						</Box> */}
					</Box>
				</Stack>
			</ModalAddGroup>
		</Box>
	);
};

export default Home;
