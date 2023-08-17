import data from '../data/account.json'

export async function getUser(username) {
	console.log('fetch user data from', username)
	return data.user
}
