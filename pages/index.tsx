import { Grid, GridItem, Container, Box, Text, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { FaCog, FaUsers, FaPuzzlePiece } from 'react-icons/fa';
import { Footer, MenuSidebar, Navbar, Layout, Contents } from '../components';

const Home: NextPage = () => {
	const dataMenu = [
		{
			title: 'Lobby',
			icon: FaCog,
		},
		{
			title: 'Group',
			icon: FaUsers,
		},
		{
			title: 'Puzzle',
			icon: FaPuzzlePiece,
		},
	];

	return (
		<Box>
			<Layout menu={dataMenu}>
				<Contents />
			</Layout>
		</Box>
	);
};

export default Home;
