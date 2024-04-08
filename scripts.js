const  iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (iOS) {
    document.addEventListener("DOMContentLoaded", function() {
        var parallaxElements = document.querySelectorAll(".parallax");
        parallaxElements.forEach(function(el) {
            el.style.backgroundAttachment = "scroll";
            // Add more rules here if needed
        });
    });
}

const watch = document.querySelectorAll('.watch')
const intersection_observer = new IntersectionObserver( (items) =>{
	items.forEach( item => {
		
		if( item.isIntersecting){
			item.target.classList.add('in-view')
		}
		else{
			item.target.classList.remove('in-view')
		}
	})
}, { threshold: 0.1} )

watch.forEach( el => intersection_observer.observe(el))