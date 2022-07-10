console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has successfully been submitted!')
}

function compliment() {
	alert('You are looking very handsome today'); 
}


let form = document.querySelector('#contact');
let catpic = document.querySelector('img'); 


form.addEventListener('submit', handleSubmit);
catpic.addEventListener('mouseover', compliment); 

