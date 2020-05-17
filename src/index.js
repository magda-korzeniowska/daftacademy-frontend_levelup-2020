import { addScroll, addYear, fetchData, carousel, addNewArrivals } from './script.js'
import './styles/style.scss';
import './styles/normalize.css';

document.addEventListener('DOMContentLoaded', () => {
	fetchData()
		.then(res => {
			console.log(res);
			carousel(res);
			addNewArrivals(res);
		})
	//  .catch(err => {
  //     window.alert(`An error occurred while trying to fetch data: ${error}`)
  //   })
	addScroll();
	addYear();
});


