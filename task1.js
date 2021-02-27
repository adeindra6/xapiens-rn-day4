const fs = require('fs');

const hasil = new Promise((resolve, reject) => {
	fs.readdir('/', (err, result) => {
	if(err) {
		reject(new Error(err));
	}
	else {
		resolve(result);
	}
	});
});

hasil.then(result =>  {
	console.log(result);
});