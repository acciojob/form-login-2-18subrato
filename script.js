let form = document.querySelector('form');
let f = document.querySelector('#id1');
	let l = document.querySelector('#id2');
	let p = document.querySelector('#id3');
	let email = document.querySelector('#email');
	form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let first = f.value;
	let last = l.value;
	let phone = p.value;
	let emailid = email.value;
	
	alert(`First Name: ${first} Last Name: ${last} Phone Number: ${phone} Email ID: ${emailid}`);
})