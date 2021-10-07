import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from '@chakra-ui/react';
interface ModalAddGroupProps {
	isOpen: boolean;
	onClose: () => void;
	onSave?: () => void;
}
export const ModalAddGroup: React.FC<ModalAddGroupProps> = (props) => {
	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose} size="2xl">
			<ModalOverlay />
			<ModalContent bg="#393939" color="white" overflow="hidden">
				<ModalHeader bg="blue.300">Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{props.children}</ModalBody>
				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={props.onClose}>
						Close
					</Button>
					<Button colorScheme="green" onClick={props.onSave}>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
