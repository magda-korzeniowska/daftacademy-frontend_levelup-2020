function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

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

// ready(function hideScroll() {
//   window.onscroll = function() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
//     {
//       scrollToTopBtn.style.display = "block";
//     } else {
//       scrollToTopBtn.style.display = "none";
//     }   
//   }
// })




