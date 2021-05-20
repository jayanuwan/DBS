import axios from 'axios';

const MAIN_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => {
	const url = `${MAIN_URL}/users`;
	return axios.get(url);
};
