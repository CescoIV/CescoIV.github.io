//button selectors
var home = document.querySelector('.h');
var projects = document.querySelector('.p');
var designs = document.querySelector('.d');
var contact = document.querySelector('.c')

//scroll functions
home.addEventListener('click', (e)=>{
	e.preventDefault();
	let item = document.querySelector('.home')
	item.className = item.className.replace('anim',''); //remove the anim class first
	console.log(item.className);
	item.scrollIntoView();
	item.className += ' anim';// add the anim class after scroll (so the animation plays more than once)
})
projects.addEventListener('click', (e)=>{
	e.preventDefault();
	let item = document.querySelector('.projects');
	item.className = item.className.replace('anim','');
	item.scrollIntoView();
	item.className += ' anim';

})
designs.addEventListener('click', (e)=>{
	e.preventDefault();
	let item = document.querySelector('.designs');
	item.className = item.className.replace('anim','');
	item.scrollIntoView();
	item.className += ' anim';
})
contact.addEventListener('click', (e)=>{
	e.preventDefault();
	let item = document.querySelector('.contact');
	item.className = item.className.replace('anim','');
	item.scrollIntoView();
	item.className += ' anim';
})