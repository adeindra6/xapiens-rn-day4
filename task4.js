const axios = require('axios');

const url = 'https://mul14.github.io/data/employees.json';

async function getEmployee() {
	await axios.get(url)
		.then(response => { 
			this.employee = response.data; 
			for(let i=0; i<response.data.length; i++) {
				if(response.data[i].salary > 15000000) {
					console.log("Salary more than 15 million : " + response.data[i].username);
				}

				for(let j=0; j<response.data[i].addresses.length; j++) {
					if(response.data[i].addresses[j].city === 'DKI Jakarta') {
						console.log("Employee live in Jakarta : " + response.data[i].username);
					}
				}

				if(response.data[i].birthday.substring(5, 7) === '03') {
					console.log("Birthday in march : " + response.data[i].username);
				}

				if(response.data[i].department.name === 'Research and development') {
					console.log("Research and development employee : " + response.data[i].username);
				}

				let absence = true;
				for(let j=0; j<response.data[i].presence_list.length; j++) {					
					if(response.data[i].presence_list[j].substring(5, 7) === '10') {
						absence = false;
					}
				}
				if(absence) {
					console.log("Employee who absence in October 2019 : " + response.data[i].username);
				}
			}
		});
}

getEmployee();