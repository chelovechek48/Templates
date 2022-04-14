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