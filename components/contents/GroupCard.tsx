import React from 'react';
import { Stack, Heading, Box, Text } from '@chakra-ui/react';
import { GroupCardProps } from '../../interface/GroupCard';

export const GroupCard: React.FC<GroupCardProps> = (props) => {
	return (
		<Stack bg="#484848" p="1rem" w="full" rounded="md">
			<Heading size="md" fontWeight="medium">
				{props.titleGroup}
			</Heading>
			<Stack px="10px">
				<Box>
					<Text>Whos in this group</Text>
					<Text>
						{props.users?.map((user) => {
							return `${user}, `;
						})}
					</Text>
				</Box>
				<Box>
					<Text>Scene Squence</Text>
					<Text>Front Yard - Garden</Text>
				</Box>
			</Stack>
		</Stack>
	);
};
