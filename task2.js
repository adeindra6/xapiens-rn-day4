const axios = require('axios');

const url_posts = 'https://jsonplaceholder.typicode.com/posts';
const url_users = 'https://jsonplaceholder.typicode.com/users';

const getUser = async () => await axios.get(url_users).then((res) => res.data);

const getPost = async () => await axios.get(url_posts).then((res) => res.data);

const main = async () => {
	const users = await getUser();
  	const post = await getPost();
  	const newPost = post.map((e) => {
		const user = users.find((u) => u.id === e.userId);
		e.username = user.username;
		return e;
  	});

  	console.log({ newPost });
};

main();