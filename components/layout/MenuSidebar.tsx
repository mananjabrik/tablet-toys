import React from 'react';
import { Stack, Icon, Text, Wrap, WrapItem, Button } from '@chakra-ui/react';
import { FaAddressBook, FaCog, FaUsers } from 'react-icons/fa';
import { MenuSidebarProps } from '../../interface';
import { LinkItem } from '.';

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
			justify="center"
		>
			{props.menu ? (
				props.menu.map((item, idx) => {
					return (
						<LinkItem
							key={idx}
							icon={item.icon}
							title={item.title}
							active={item.active}
						/>
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
			<Button position="absolute" bottom="10rem" colorScheme="blackAlpha">
				Logout
			</Button>
		</Wrap>
	);
};
