import { Box, useDisclosure } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { FaCog, FaUsers, FaPuzzlePiece, FaUser } from 'react-icons/fa';
import { Layout, Contents, ModalAddGroup } from '../components';

const Home: NextPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
					dataUsers={dataUsers}
					onAddGroup={onOpen}
				/>
			</Layout>
			<ModalAddGroup isOpen={isOpen} onClose={onClose}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
				et, ipsum sapiente asperiores quos perferendis voluptatibus odit
				illo sint, quae, modi quam minus autem sequi nemo vel
				voluptatum! Corrupti, quas?
			</ModalAddGroup>
		</Box>
	);
};

export default Home;
