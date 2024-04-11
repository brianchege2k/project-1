const productsURL = 'https://dummyjson.com/products';
fetch(productsURL)
  .then(res => res.json())
  .then(data => {
    // Check if 'products' exists in the data
    if (data.hasOwnProperty('products')) {
      const productsContainer = document.getElementById('products-container');
      // Iterate over the array of products
      data.products.forEach(product => {
        // card elements
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
        
        const addToCartBtn = document.createElement('button');
        addToCartBtn.classList.add('btn','add-to-cart-btn');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.dataset.productId = product.id;
        cardBody.appendChild(addToCartBtn);
        
        card.appendChild(cardBody);
        
        // Append the card to the products container
        productsContainer.appendChild(card);
      });
    } else {
      console.error('No products found in the response data.');
    }
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });


//cart functionality

// Initialize shopping cart
let cart = [];

// Function to add item to cart
function addToCart(product) {
    cart.push(product);
    // Update cart icon in navbar
    updateCartIcon();
}

// Function to update cart icon in navbar
function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.textContent = cart.length;
}
// Attach event listener to each "Add to Cart" button
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Retrieve product details from the button's data attribute
        const productId = button.dataset.productId;
        const product = getProductById(productId); // Implement this function to get product details by ID
        if (product) {
            addToCart(product);
            // Optionally, display a confirmation message to the user
            alert('Item added to cart!');
        }
    });
});
