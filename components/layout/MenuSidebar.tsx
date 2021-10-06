import React from 'react';
import { Box, Stack, Icon, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { FaAddressBook, FaCog, FaUsers } from 'react-icons/fa';
import { MenuSidebarProps } from '../../interface';

export const MenuSidebar: React.FC<MenuSidebarProps> = (props) => {
	return (
		<Wrap
			position="fixed"
			top="4.6rem"
			bg="#3a7192"
			w="full"
			maxW="8rem"
			height="100vh"
			py="3rem"
			spacing="0"
		>
			{props.menu ? (
				props.menu.map((item, idx) => {
					return (
						<WrapItem
							key={idx}
							justifyContent="center"
							py="1rem"
							color="white"
							cursor="pointer"
							_hover={{ bg: '#46a3db' }}
							transition="0.2s"
							w="full"
						>
							<Stack align="center">
								<Icon as={item.icon} w="2rem" h="2rem"></Icon>
								<Text fontWeight="light">{item.title}</Text>
							</Stack>
						</WrapItem>
					);
				})
			) : (
				<WrapItem
					justifyContent="center"
					py="1rem"
					color="white"
					cursor="pointer"
					_hover={{ bg: 'blue.300' }}
					transition="0.2s"
					w="full"
				>
					<Stack align="center">
						<Icon as={FaCog} w="2rem" h="2rem"></Icon>
						<Text fontWeight="light">Lobby</Text>
					</Stack>
				</WrapItem>
			)}
		</Wrap>
	);
};
