const options = {
	method: 'GET',
	headers: {
		'Content_Type': "application/json"
	},
    body : JSON.stringify({
        brand: ""
    })
};

fetch('https://tallbuoy.pythonanywhere.com/all/products/')
	.then(response => response.json())
	.then(response => {
		console.log(response)
		for (let i = 0; i < response.length; i++) {
			const element = response[i];
			document.getElementById("con").innerHTML +=
			'<div id="sho" class="shoe">'+
            '<img id="yeezy" class="boost" src='+element.img+' alt="yeezy 350 boost">'+
    '</div>'+
        
        '<div id="prv"class="pr">'+
            '<p>Original</p>'+
        '<h2>'+element.name+' </h2>'+
        
        '<p>ksh/= 7000</p>'+
        '<p> '+element.desc+' </p>'+
        '<button type="button" class="button" onClick="addcart('+element.id+','+element.name+')">'+
            '<span class="button__text">PURCHASE</span>'+
            '<span class="button__icon">'+
                '<ion-icon name="card"></ion-icon>'+
            '</span>'+
        '</button>'+
    '</div>'
		}
	})
	.catch(err => console.error(err));
	let total = 0;
	function addcart(id,name){
		total+=1
		document.getElementById("total").innerHTML=total;
		alert(""+name+" has been added to your cart, successfully. your invoice is JMIN0"+id+"");
	}