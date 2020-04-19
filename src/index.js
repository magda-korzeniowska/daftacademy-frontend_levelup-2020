import addImg from './script.js'
import './styles/style.scss';
import './styles/normalize.css';

// addImg();

$('#carouselExample').on('slide.bs.carousel', function (e) {

	/*

	CC 2.0 License Iatek LLC 2018
	Attribution required
  
	*/

	let $e = $(e.relatedTarget);

	let idx = $e.index();
	console.log("IDX :  " + idx);

	let itemsPerSlide = 8;
	let totalItems = $('.carousel-item').length;

	if (idx >= totalItems - (itemsPerSlide - 1)) {
		let it = itemsPerSlide - (totalItems - idx);
		for (let i = 0; i < it; i++) {
			// append slides to end
			if (e.direction == "left") {
				$('.carousel-item').eq(i).appendTo('.carousel-inner');
			}
			else {
				$('.carousel-item').eq(0).appendTo('.carousel-inner');
			}
		}
	}
});