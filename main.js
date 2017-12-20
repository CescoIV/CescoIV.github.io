//button selectors
let home = document.querySelector('.h');
let projects = document.querySelector('.p');
let designs = document.querySelector('.d');
let skills = document.querySelector('.s');
let contact = document.querySelector('.c');

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
skills.addEventListener('click', (e)=>{
	e.preventDefault();
	let item = document.querySelector('.skills');
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

//image gallery functionality

let forward = document.querySelector('.forward');
let back = document.querySelector('.back')
let count = 1;
let max_images= 6; //change as you add more images

//forward button script
forward.addEventListener('click', (e)=>{
	e.preventDefault();
	count === max_images ? count=1 : count+=1;
	let img = document.querySelector('#current-gal-display');
	img.className = '';
	img.setAttribute('src', `./images/showcase${count}.png`);
	img.className = 'anim';


})
//back button script
back.addEventListener('click', ()=>{
	count === 1 ? count = max_images : count-=1;
	let img = document.querySelector('#current-gal-display');
	img.setAttribute('src', `./images/showcase${count}.png`);
})
