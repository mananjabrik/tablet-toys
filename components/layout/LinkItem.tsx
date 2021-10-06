import React from 'react';
import { ItemsProps } from '../../interface';
import { WrapItem, Stack, Icon, Text, WrapItemProps } from '@chakra-ui/react';
interface LinkItemProps extends ItemsProps {}
export const LinkItem: React.FC<LinkItemProps> = (props) => {
	const ActivateLink = () => {
		if (props?.active === 1) {
			return { bg: '#46a3db' };
		} else {
			return { bg: '' };
		}
	};

	return (
		<WrapItem
			justifyContent="center"
			py="1rem"
			color="white"
			cursor="pointer"
			_hover={{ bg: '#46a3db' }}
			transition="0.2s"
			w="full"
			bg={ActivateLink().bg}
		>
			<Stack align="center">
				<Icon as={props.icon} w="2rem" h="2rem"></Icon>
				<Text fontWeight="light">{props.title}</Text>
			</Stack>
		</WrapItem>
	);
};
