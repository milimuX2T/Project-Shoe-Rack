const options = {
	method: 'GET',
	headers: {
		'Content_Type': "application/json"
	},
    body : JSON.stringify({
        brand: ""
    })
};

fetch('https://shoe-catalogue-api-codex.herokuapp.com/api/shoes/brand/Nike')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));