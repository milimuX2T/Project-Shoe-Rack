

fetch('https://shoe-catalogue-api-codex.herokuapp.com/api/shoes/brand/Nike')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));