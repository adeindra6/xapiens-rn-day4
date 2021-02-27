const count = () => {
	let promises = [];

	for(let i=1; i<=3; i++) {
		promises.push(new Promise((resolve) => {
			setTimeout(() => {
				resolve(i);
			}, 1000);
		})
		);
	}
	return Promise.all(promises);
};

const getCount = async () => {
	let result = await count();
	return result;
};

getCount().then((result) => {
	for(let i=0; i<result.length; i++) {
		console.log(result[i]);
	}
	console.log('Done');
});