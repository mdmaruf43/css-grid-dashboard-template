var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 3,
	loop: true,
	freeMode: true,
	loopedSlides: 5, //looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop: true,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	thumbs: {
	  swiper: galleryThumbs,
	},
});
var swiper = new Swiper('.swiper1', {
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1,
		  spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 1,
		  spaceBetween: 30
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 1,
		  spaceBetween: 40
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
});