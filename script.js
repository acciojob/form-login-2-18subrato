let form = document.querySelector('form');
let f = document.querySelector('#id1');
	let l = document.querySelector('#id2');
	let p = document.querySelector('#id3');
	let e = document.querySelector('#id4');
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let first = f.value;
	let last = l.value;
	let phone = p.value;
	let email = e.value;
	
	alert(`First Name: ${first} Last Name: ${last} Phone Number: ${phone} Email ID: ${email}`);
})