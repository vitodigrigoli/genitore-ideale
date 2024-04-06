const swiper = new Swiper(".swiper", {
	effect: "cards",
	grabCursor: true,
	centeredSlides: true,
	loop: true,
	slidesPerView: 1.5,
	pagination: {
	  el: ".swiper-pagination",
	},
	breakpoints: {
		1024: {
			slidesPerView: 3,
			}
		}
});