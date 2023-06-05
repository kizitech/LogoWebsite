const html = document.querySelector('html');
const body = document.querySelector('body');
const menuBtn = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector(".nav-lists");
const navLinks = document.querySelector(".nav-list");
const logoBar = document.querySelector(".logo");
const modeSwitch = document.querySelector(".mode-switch");
const hideBtn = document.querySelector(".hide-btn");
const hide = document.querySelector(".hide");


menuBtn.addEventListener('click', ()=> {
	body.classList.toggle('open');
	navMenu.classList.toggle('open');
	navLinks.classList.toggle('open');
	logoBar.classList.toggle('open');
});

hideBtn.addEventListener('click', ()=> {
	hide.classList.toggle('show');
	alert('work');
	if(hide.classList.contains('show')){
		hideBtn.innerHTML = 'Show less';
	}else{
		hideBtn.innerHTML = 'Show more';
	}
});

modeSwitch.addEventListener('click', ()=> {
	logoBar.classList.toggle('dark');
	html.classList.toggle('dark');
	if(	html.classList.contains('dark')) {
		modeSwitch.innerHTML = `Light Mode &#9733;`;
	}else{
		modeSwitch.innerHTML = `Green Mode &#9790;`;
	}
});

window.addEventListener('scroll', function() {
	logoBar.classList.toggle('sticky', window.scrollY > 0);
});
