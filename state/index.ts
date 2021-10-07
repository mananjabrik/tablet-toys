import { atom } from 'recoil';
import { GroupProps } from '../components';
import { usersDTO } from '../interface';

export type GroupStatePops = Record<string, GroupProps>;

export const gruopsState = atom<GroupStatePops>({
	key: 'groupStates',
	default: {},
});

export type UsersStateProps = Record<string, usersDTO>;

export const UsersState = atom({
	key: 'usersStates',
	default: {},
});
