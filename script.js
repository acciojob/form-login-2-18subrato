let button = document.querySelector('button');

button.addEventListener('click',()=>{
	let f = document.querySelector('#id1').value;
	let l = document.querySelector('#id2').value;
	let p = document.querySelector('#id3').value;
	let e = document.querySelector('#id4').value;
	
	alert(`First Name:${f} Last Name:${l} Phone Number:${p} Email ID:${e}`);
})