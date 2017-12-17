//button selectors
var home = document.querySelector('.h');
var projects = document.querySelector('.p');
var designs = document.querySelector('.d');
var contact = document.querySelector('.c')

//scroll functions
home.addEventListener('click', (e)=>{
	e.preventDefault();
	document.querySelector('.home').scrollIntoView();
})
projects.addEventListener('click', (e)=>{
	e.preventDefault();
	document.querySelector('.projects').scrollIntoView();
})
designs.addEventListener('click', (e)=>{
	e.preventDefault();
	document.querySelector('.designs').scrollIntoView();
})
contact.addEventListener('click', (e)=>{
	e.preventDefault();
	document.querySelector('.contact').scrollIntoView();
})