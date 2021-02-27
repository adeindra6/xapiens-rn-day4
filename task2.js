const axios = require('axios');

const url_posts = 'https://jsonplaceholder.typicode.com/posts';
const url_users = 'https://jsonplaceholder.typicode.com/users';

async function getPost() {
	await axios.get(url_posts)
		.then(response => {
			console.log(response.data)
		});
	getUser();
}

async function getUser() {
	await axios.get(url_users)
		.then(response => {
			console.log(response.data)
		});
}

getPost();