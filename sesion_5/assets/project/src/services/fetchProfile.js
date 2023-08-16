import data from '../data/profile.json'

export async function getPosts(username) {
	console.log('fetch posts from @', username, ' ....')
	return data.posts
}

export async function getUser(username) {
    console.log('fetch user data from @', username, ' ....')
	return data.user
}
