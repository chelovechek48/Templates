const body = document.querySelector('body')
const header = document.querySelector('.header')

if (window.pageYOffset > 0) {
	header.classList.add('active');
}

window.onscroll = function HeaderActive() {
	if (window.pageYOffset > 0) {
		header.classList.add('active');
		if (window.pageYOffset > document.querySelector('#facts').offsetTop - (document.documentElement.clientHeight)*0.75 && factsLock == false) {
			numbersCount(); factsLock = true;
		}
		if (window.pageYOffset > document.querySelector('#our-team .swiper').offsetTop - (document.documentElement.clientHeight)*0.75 && teamLock == false) {
			swiperTeam.slideTo(0, 800); teamLock = true;
		}
		if (window.pageYOffset > document.querySelector('#blog .swiper').offsetTop - (document.documentElement.clientHeight)*0.75 && blogLock == false) {
			swiperBlog.slideTo(0, 800); blogLock = true;
		}
	} else {
		header.classList.remove('active')
	}
}


window.NavToggle = () => {
   document.querySelector('nav').classList.toggle('active')
   document.querySelector('body').classList.toggle('fixed')
	document.querySelector('.hamburger').classList.toggle('active')
}
window.NavClose = () => {
   document.querySelector('nav').classList.remove('active')
   document.querySelector('body').classList.remove('fixed')
	document.querySelector('.hamburger').classList.remove('active')
}