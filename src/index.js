import { addScroll, addYear, fetchData, carousel, addNewArrivals, addCategory } from './script.js'
import './styles/style.scss';
import './styles/normalize.css';

document.addEventListener('DOMContentLoaded', () => {
	fetchData()
		.then(res => {
			console.log(res);
			carousel(res);
			addNewArrivals(res.slice(8, 48));
			addCategory((res.slice(44, 48)));
		})
	 .catch(err => {
      window.alert(`An error occurred while trying to fetch data. Try again later`)
    })
	addScroll();
	addYear();
});


