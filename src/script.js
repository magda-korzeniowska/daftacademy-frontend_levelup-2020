// ******* SCROLL TO TOP *******

const addScroll = () => {
  const scrollToTopBtn = document.querySelector(".scroll");

  scrollToTopBtn.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  })

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  })
}

// ******* ADD YEAR IN FOOTER *******

const addYear = () => {
  let year = document.querySelector(".copyrights__year");
  year.innerHTML = new Date().getFullYear();
}

// ******* SHOW ALL PRODUCTS *******

// const showAll = () => {
//   const showAllBtn = document.querySelector(".new-arrivals__all-products");
//   let otherProducts = 3;

//   const loadAll = (otherProducts) => {
//     let productsGrid = document.querySelector(".new-arrivals__row");
//     for (let i = 0; i < otherProducts; i++) {
//       productsGrid.innerHTML +=
//       `
//       <div class="col-6 col-sm-6 col-md-3 col-lg-3 new-arrivals__col">
//         <div class="card mb-4 product">
//           <img src="https://via.placeholder.com/309x390/d7d7d7/959595?Text=309x390.png" class="card-img-top product__image" alt="product image">
//           <div class="class-body">
//             <h5 class="card-title pt-3 product__category">Category</h5>
//             <p class="card-text product__description">Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et ...</p>
//             <p class="card-text product__price">$</p>
//           </div>
//         </div>
//       </div>
//       `
//     }
//   }

//   showAllBtn.addEventListener("click", () => {
//     loadAll(otherProducts);
//     showAllBtn.classList.add("d-none")
//   })
// }

// ******* FETCH DATA *******

const spinner = document.getElementById("spinner");

const showSpinner = () => {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 5000);
}

const hideSpinner = () => {
  spinner.className = spinner.className.replace("show", "");
}

const fetchData = () => {
  showSpinner();
  return new Promise ((resolve, reject) => {
    
    fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "asos2.p.rapidapi.com",
        "x-rapidapi-key": "71385867eamshfe05d81dc3bb946p1b2c5cjsne3162cf192c8"
      }
    })
      .then(res => {
        hideSpinner()
        let productsData = []
        res.json()
          .then(data => ({
            data: data
          }))
          .then(res => {
            res.data.products.forEach(product => {
              productsData.push({
                name: product.name,
                price: product.price.current.value,
                imageUrl: product.imageUrl,
                currency: product.price.currency
              })
            })
            resolve(productsData);
          })
      })
      .catch(err => {
        window.alert(`An error occurred while trying to fetch data: ${error}`)
      })
    })  
}

// ******* CAROUSEL *******

const carousel = (products) => {

  let countFirstFour = true;
  let isCardSet = true;
  let setCount = 1;
  let carouselInner = document.querySelector(".carousel-inner");

  for (let i = 1; i < products.length; i++) {
    if (isCardSet) {
      insertCarouselItem(countFirstFour, setCount);
      isCardSet = false
    }
    
    if (i % 4 === 0) {
      document.getElementById(`slider__row-${setCount}`).innerHTML += insertCards(products[i - 1].imageUrl, products[i - 1].name, products[i - 1].price, products[i - 1].currency)
      countFirstFour = false; 
      isCardSet = true;
      setCount++;    
    } else {
      document.getElementById(`slider__row-${setCount}`).innerHTML += (insertCards(products[i - 1].imageUrl, products[i - 1].name, products[i - 1].price, products[i - 1].currency));
    }
    
  }

  function insertCarouselItem(isActive, set) {
    let active = isActive ? ' active' : '';
    let result = 
      `
      <div id="set-${set}" class="carousel-item ${active}">
      <div id="slider__row-${set}" class="row slider__row">
      `;

    carouselInner.innerHTML += result
  }
  
  function insertCards(imageUrl, name, price, currency) {

    let result = `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 slider__col">
      <div class="card slider__card">
        <img src="http://${imageUrl}" class="img-fluid slider__item-image" alt="product image">
        <div class="card-img-overlay d-flex flex-column justify-content-end">
          <p class="card-text pb-1 slider__item-description">${name}</h5>
          <p class="card-text slider__item-price">${price} ${currency}</p>
        </div> 
      </div>
    </div>
    `;
      
    return result;   
  }
}

// ******* NEW ARRIVALS *******

const addNewArrivals = (products) => {

  const productsGrid = document.querySelector(".new-arrivals__row");
  const showAllBtn = document.querySelector(".new-arrivals__all-products");
  const itemsOnPage = 8;
  
  const addProducts = (start, end) => {
    let items = products.slice(start, end);
    for (let i = 1; i < items.length + 1; i++) {
      insertGridItem(items[i - 1].imageUrl, items[i - 1].name, items[i - 1].price, items[i - 1].currency);
    }
  
    function insertGridItem(imageUrl, name, price, currency) {
      let result = 
        `
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 new-arrivals__col">
          <div class="card mb-4 product">
            <img src="http://${imageUrl}" class="card-img-top product__image" alt="product image">
            <div class="class-body">
              <h5 class="card-title pt-3 product__category"></h5>
              <p class="card-text product__description">${name}</p>
              <p class="card-text product__price">${price} ${currency}</p>
            </div>
          </div>
        </div>
        `
  
      productsGrid.innerHTML += result
    }
  }

  addProducts(0, itemsOnPage);
  
  showAllBtn.addEventListener("click", () => {
    addProducts(itemsOnPage, products.length)
    showAllBtn.classList.add("d-none")
  })  
}

const addCategory = (products) => {

  const categories = document.querySelectorAll(".category__col");
  
  products.map((product, category) => {
    categories[category].innerHTML += 
      `
      <div class="card category__class">
        <img src="http://${product.imageUrl}"  class="img-fluid category__image" alt="product image">
        <div class="card-img-overlay category__card">
          <h5 class="card-title pt-3 pl-3 category__name">${product.name}</h5>
          <a href="#" class="card-link pl-3 category__shop">Shop now</a>
        </div>       
      </div>  
      ` 
  })
}

export { addScroll, addYear, fetchData, carousel, addNewArrivals, addCategory };

