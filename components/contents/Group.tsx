import React from 'react';
import { Wrap, WrapItem, Heading, Stack, Box, Text } from '@chakra-ui/react';
import { GroupCard } from '.';
import { GroupCardProps } from '../../interface/GroupCard';
export interface GroupProps {
	dataGroup?: GroupCardProps[];
}
export const Group: React.FC<GroupProps> = (props) => {
	return (
		<Wrap>
			{props.dataGroup
				? props.dataGroup.map((group, idx) => {
						return (
							<WrapItem w="45%" key={idx}>
								<GroupCard
									titleGroup={group?.titleGroup ?? ''}
									users={group?.users ?? []}
								/>
							</WrapItem>
						);
				  })
				: ''}
		</Wrap>
	);
};
