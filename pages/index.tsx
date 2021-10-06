import { Grid, GridItem, Container, Box, Text, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { FaCog, FaUsers, FaPuzzlePiece } from 'react-icons/fa';
import { Footer, MenuSidebar, Navbar, Layout, Contents } from '../components';

const Home: NextPage = () => {
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
			title: 'group 1 (Pendaki)',
			users: ['manan', 'H salim', 'P Slamet'],
		},
		{
			title: 'group 2 (Panjat Tebing)',
			users: ['muslim', 'wes', 'mustofa'],
		},
	];
	return (
		<Box>
			<Layout menu={dataMenu}>
				<Contents
					//@ts-ignore
					dataGroup={dataGroup ?? []}
				/>
			</Layout>
		</Box>
	);
};

export default Home;
