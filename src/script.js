// ******* SCROLL TO TOP *******

const addScroll = () => {
  const scrollToTopBtn = document.querySelector(".scroll");

  scrollToTopBtn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  })

  window.onscroll = () => {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
}

// ******* ADD YEAR *******

const addYear = () => {
  let year = document.querySelector(".copyrights__year");
  year.innerHTML = new Date().getFullYear();
}

// ******* SHOW ALL PRODUCTS *******

const showAll = () => {
  const showAllBtn = document.querySelector(".new-arrivals__all-products");
  let otherProducts = 3;

  const loadAll = (otherProducts) => {
    let productsGrid = document.querySelector(".new-arrivals__row");
    for (let i = 0; i < otherProducts; i++) {
      productsGrid.innerHTML +=
      `
      <div class="col-6 col-sm-6 col-md-3 col-lg-3 new-arrivals__col">
        <div class="card mb-4 product">
          <img src="https://via.placeholder.com/309x390/d7d7d7/959595?Text=309x390.png" class="card-img-top product__image" alt="product image">
          <div class="class-body">
            <h5 class="card-title pt-3 product__category">Category</h5>
            <p class="card-text product__description">Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et ...</p>
            <p class="card-text product__price">$</p>
          </div>
        </div>
      </div>
      `
    }
  }

  showAllBtn.addEventListener("click", () => {
    loadAll(otherProducts);
    showAllBtn.classList.add("d-none")
  })
}

export { addScroll, addYear, showAll };