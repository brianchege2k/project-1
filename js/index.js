const productsURL = 'https://dummyjson.com/products';
fetch(productsURL)
  .then(res => res.json())
  .then(data => {
    if (data.hasOwnProperty('products')) {
      const productsContainer = document.getElementById('products-container');

      data.products.forEach(product => {

        const card = document.createElement('div');
        card.classList.add('card');
        
        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.src = product.thumbnail;
        image.alt = product.title;
        card.appendChild(image);
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.title;
        cardBody.appendChild(title);
        
        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;
        cardBody.appendChild(description);
        
        const price = document.createElement('p');
        price.classList.add('card-text');
        price.textContent = `Price: $${product.price}`;
        cardBody.appendChild(price);
        
        const rating = document.createElement('p');
        rating.classList.add('card-text');
        rating.textContent = `Rating: ${product.rating}`;
        cardBody.appendChild(rating);

        const stock = document.createElement('p')
        stock.classList.add('card-text')
        stock.textContent = `Stock: ${product.stock}`
        cardBody.appendChild(stock)

        const addToCartBtn = document.createElement('button');
        addToCartBtn.classList.add('btn','add-to-cart-btn');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.dataset.productId = product.id;
        cardBody.appendChild(addToCartBtn);

        //add to cart click eventlistener
        addToCartBtn.addEventListener('click', function() {

            if(product.stock > 0){
                product.stock --;
                stock.textContent =`Stock: ${product.stock}`
                cartCount++;
                updateCartCount();

            }else{

                alert(`Sorry, ${product.title} Out of Stock`)

            }
            
  });
cardBody.appendChild(addToCartBtn);


card.appendChild(cardBody);

productsContainer.appendChild(card);

        
card.appendChild(cardBody);
        
productsContainer.appendChild(card);
      });
    } else {
      console.error('No products found in the response data.');
    }
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });


// Initialize the cart count to 0
let cartCount = 0;
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cartCount;
}

document.getElementById('signupLink').addEventListener('click', function() {
    // Show the Signup modal
    var signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
    signupModal.show();
  });

//Hero image eventListner
  const heroImage = document.getElementById('hero-image');

  heroImage.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
  });
  
  heroImage.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
  });
