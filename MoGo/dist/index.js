const spollersItem = document.querySelectorAll('.accordion .item');
const AccordionBtn = document.querySelectorAll('.accordion button')

for (let index = 0; index < AccordionBtn.length; index ++) {
   AccordionBtn[index].addEventListener('click', event => {
      for (let i = 0; i < spollersItem.length; i ++) {
         spollersItem[i].classList.remove('active');
      }
      spollersItem[index].classList.add('active');
   });
}

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
const facts = document.querySelectorAll('.facts-count')
factsLock = false;

maxNumber = 0;
for (let index = 0; index < facts.length; index ++) {
	facts[index].dataset.max = facts[index].innerHTML;
	facts[index].innerHTML = 0;
	facts[index].dataset.current = 0;
	facts[index].dataset.count = 0;
	if (facts[index].dataset.max > maxNumber) {
		maxNumber = facts[index].dataset.max;
	}
}

function numbersCount() {
   time = 1000;
   delay = time/maxNumber;
	for (let index = 0; index < facts.length; index ++) {
		let FactCount = setInterval(() => {
			for (let i = 0; i < parseInt(facts[index].dataset.max); i ++) {
				if (facts[index].dataset.count == Math.round(maxNumber/parseInt(facts[index].dataset.max))*i) {
					facts[index].dataset.current ++;
				}
			}
			facts[index].innerHTML = facts[index].dataset.current;
			if (parseInt(facts[index].dataset.max) <= parseInt(facts[index].dataset.current)) {
				clearInterval(FactCount);
				delete(facts[index].dataset.max);
				delete(facts[index].dataset.current);
				delete(facts[index].dataset.count);
			}
			facts[index].dataset.count ++;
		}, delay);
	}
}
const bulletsBanner = document.querySelectorAll('.swiper-slide')
const swiperBanner = new Swiper('#banner .swiper', {
	loop: true,
	grabCursor: true,

	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,

		renderBullet: function (index, className) {
			return '<span class="' + className + '"><span>' + ( bulletsBanner[index].dataset.span ) + "</span></span>";
		},
	},
});

const swiperQuote = new Swiper('.quote .swiper', {
	loop: true,
	grabCursor: true,

	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var teamLock = false;
const swiperTeam = new Swiper('#our-team .swiper', {
	loop: false,
	grabCursor: true,
	slidesPerView: 1.1,
	spaceBetween: 25,
	initialSlide: 0,

	autoplay: {
		delay: 10000,
	},

	breakpoints: {
		501: {
			slidesPerView: 2.1,
		},
		769: {
			slidesPerView: 3,
			initialSlide: 1,
		},
		1201: {
			slidesPerView: 3,
			spaceBetween: 30,
			initialSlide: 1,
		},
	},
});



var blogLock = false;
const swiperBlog = new Swiper('#blog .swiper', {
	loop: false,
	grabCursor: true,
	slidesPerView: 1.1,
	spaceBetween: 20,
	initialSlide: 0,

	breakpoints: {
		501: {
			slidesPerView: 2.1,
			spaceBetween: 20,
		},
		769: {
			slidesPerView: 2.1,
			spaceBetween: 25,
		},
		901: {
			slidesPerView: 3.1,
			spaceBetween: 25,
		},
		1201: {
			slidesPerView: 3,
			spaceBetween: 10,
			initialSlide: 1,
		},
	},
});