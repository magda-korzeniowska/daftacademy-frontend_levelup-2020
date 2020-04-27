function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// ******* SCROLL TO TOP *******

const scrollToTopBtn = document.querySelector(".scroll");

ready(function addScroll() { 
  scrollToTopBtn.addEventListener("click", function() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  })
})

ready(function hideScroll() {
  window.onscroll = function() {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2 ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    } 
  }
})

// ******* ADD YEAR *******

ready(function addYear() {
  let year = document.querySelector(".copyrights__year");
  year.innerHTML = new Date().getFullYear();
})

// ******* SHOW ALL PRODUCTS *******

ready(function showAll() {
  const showAllBtn = document.querySelector(".new-arrivals__all-products-link");
  const newArrivalsCols = document.querySelectorAll(".new-arrivals__col");
  showAllBtn.addEventListener("click", function(e) {
    e.preventDefault();
    for (let i = 0; i < newArrivalsCols.length; i++) {
      newArrivalsCols[i].classList.remove("d-none");
    }
  showAllBtn.style.display = "none";
  })
})



