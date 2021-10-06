import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Footer, MenuSidebar, Navbar } from '.';
import { MenuSidebarProps } from '../../interface';
interface LayoutProps extends MenuSidebarProps {}
export const Layout: React.FC<LayoutProps> = (props) => {
	return (
		<Box>
			<Navbar />
			<MenuSidebar menu={props.menu} />
			{props.children}
			<Footer></Footer>
		</Box>
	);
};
