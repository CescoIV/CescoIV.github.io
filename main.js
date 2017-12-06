var i = document.querySelector('.a');
var p = document.querySelector('.p');
var d = document.querySelector('.d');
var me = document.querySelector('.me_box');
var top = document.querySelector('.top');
var bot = document.querySelector('.bot');

var home = '<h1 class="new">Home</h1>'

var about_me_html = `
	<div>
		<h1 class="new">About Me</h1>
		<p class='about-me'>
			My name is Francisco Ordaz IV, I am a Web Developer focusing on technologies such as React <br /> for Front-End work and
			NodeJS with Express for Back-End work. I have also done some graphic <br />design and other miscellaneous art which you 
			can check under the Designs section.<br/>Currently my interest lies in making meso-american languages more accessible 
			to <br />the public from a technological standpoint, check out the Nahuatl Project for more info.
		</p>
	</div>`;
var projects_html = `
	<div>
		<h1 class="new">Projects</h1>
		<div class='projects'>
			<div class="project_box">
				<a href='https://study-nahuatl.herokuapp.com/'>
					<div class='project_box'>
						<img src='./images/nahuatl.png'/>
						<h3>Study-Nahuatl App</h3>
						<p class="description">Part of the Nahuatl Project, this is a Front-End solution that aims to 
						facilitate the study of the Nahuan language.
						</p>
					</div>
				</a>
			</div>
			<div class="project_box">
				<a href='https://nahuatl-api.herokuapp.com/'>
					<div class='project_box'>
						<img src='./images/nahuatl.png'/>
						<h3>Nahuatl API</h3>
						<p class="description">Back-End portion to the Nahuatl project, a RESTful API which currently holds data on 
						the Nahuatl Language. 
						</p>
					</div>
				</a>
			</div>
			<div class="project_box">
				<a href='https://food-dice.herokuapp.com/'>
					<div class='project_box'>
						<img src='#'/>
						<h3>Food Dice</h3>
						<p class="description"> Application made to curate indecisiveness when choosing a place to eat, or to simply 
						suggest options. Worked on search component and rendering.
						</p>
					</div>
				</a>
			</div>
			<div class="project_box">
				<a href='https://my-travels-log.herokuapp.com/'>
					<div class='project_box'>
						<img src='./images/traveler_logo_book.png'/>
						<h3>Travel Logs App</h3>
						<p class="description">Travel application to help users keep track of travels. I worked 
						on the Back-End portions and logo design.
						</p>
					</div>
				</a>
			</div>

			<div class="project_box">
				<a href='https://github.com/CescoIV/tic-tac-toe/tree/fran_branch'>
					<div class='project_box'>
						<img src='./images/swords.png'/>
						<h3>Pirate-tac-toe</h3>
						<p class="description">One of my first solo projects, pure vanilla JS, HTML and CSS with custom assets made 
						by myself. A synthesis of my design and coding abilities.
						</p>
					</div>
				</a>
			</div>
		</div>
	</div>
	`;
var designs_html = `
	<h1 class='new'>Designs</h1>
	<div class='displays'>

		<img class="d_display" src="./images/showcase1.png">
		<img class="d_display" src="./images/showcase2.png">
		<img class="d_display" src="./images/showcase3.png">
		<img class="d_display" src="./images/showcase4.png">
		<img class="d_display" src="./images/showcase5.png">
		<img class="d_display" src="./images/showcase6.png">
		<img class="d_display" src="./images/image2.jpg">
		<p>among others...</p>
	</div>`
i.addEventListener('click', (e)=>{
	e.preventDefault();
	document.querySelector('.big_box').innerHTML = about_me_html;
	me.setAttribute('src','./images/self2.png');
})

p.addEventListener('click', (e)=>{
	e.preventDefault();
	me.setAttribute('src','#');
	document.querySelector('.big_box').innerHTML = projects_html;
})
me.addEventListener('click',(e)=>{
	e.preventDefault();
	document.querySelector('.big_box').innerHTML= about_me_html;
})
d.addEventListener('click',(e)=>{
	e.preventDefault();
	me.setAttribute('src','#');
	document.querySelector('.big_box').innerHTML = designs_html;
})