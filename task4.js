const axios = require('axios');

const url = 'https://mul14.github.io/data/employees.json';

async function getEmployee() {
	await axios.get(url)
		.then(response => { 
			this.employee = response.data; 

			// Salary more than 15 million
			let data1 = response.data.filter(function(s) {
				return s.salary > 15000000;
			});
			if(data1 != "") {
				for(let i=0; i<data1.length; i++) {
					console.log("Salary more than 15 million : " + data1[i].username);
				}
			}
			else {
				console.log("No one have salary more than 15 million");
			}

			// Employee live in Jakarta
			let data2 = response.data.filter(function(s) {
				for(let i=0; i<s.addresses.length; i++) {
					return s.addresses[i].city === "DKI Jakarta";
				}
			});
			if(data2 != "") {
				for(let i=0; i<data2.length; i++) {
					console.log("Employee live in Jakarta : " + data2[i].username);
				}
			}
			else {
				console.log("No employee live in Jakarta");
			}

			// Birthday in march
			let data3 = response.data.filter(function(s) {
				return s.birthday.substring(5, 7) === '03';
			});
			if(data3 != "") {
				for(let i=0; i<data3.length; i++) {
					console.log("Birthday in march : " + data3[i].username);
				}
			}
			else {
				console.log("No one birthday in march");
			}

			// Research and development employee
			let data4 = response.data.filter(function(s) {
				return s.department.name === "Research and development";
			});
			if(data4 != "") {
				for(let i=0; i<data4.length; i++) {
					console.log("Research and development employee : " + data4[i].username);
				}
			}
			else {
				console.log("No one research and development employee");
			}

			// How many absence in October 2019			
			let data5 = response.data.map(e => {
				let m = e.presence_list.filter((s) => {
					return s.slice(5, 7) === "10";
				});
				let count = m.length;
				return count;
			});
			if(data5.length > 0) {
				for(let i=0; i<data5.length; i++) {
					console.log("How many absence in October 2019 for " + response.data[i].username + " : " + data5[i]);
				}
			}
		});
}

getEmployee();