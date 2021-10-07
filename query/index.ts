import { useQuery } from 'react-query';
import axios from 'axios';
import { usersDTO } from '../interface';

export const httpClient = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

export const useUsersQuery = () =>
	useQuery('users', async () => {
		const axiosResponse = await httpClient.get<usersDTO[]>('users');
		return axiosResponse.data;
	});
