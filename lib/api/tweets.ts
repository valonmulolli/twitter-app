import { API_URL, authToken } from './config';

export const ListTweets = async () => {
	const res = await fetch(`${API_URL}/tweet`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	});
	if (res.status === 401) {
		throw new Error('Not Authorized. Please sign in');
	}
	if (res.status !== 200) {
		throw new Error('Error fetching tweets');
	}
	return await res.json();
};

 export const getTweet =  async (id: string) => {
	const res = await fetch(`${API_URL}/tweet`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	});
	if (res.status === 401) {
		throw new Error('Not Authorized. Please sign in');
	}
	if (res.status !== 200) {
		throw new Error('Error fetching tweets');
	}
	return await res.json();
};