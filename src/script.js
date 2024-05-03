function generateCaptcha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

document.addEventListener('DOMContentLoaded', function () {
  const captchaContainer = document.getElementById('captchaContainer');
  const captchaInput = document.getElementById('captchaInput');
  const loginForm = document.getElementById('loginForm');

  let captcha = generateCaptcha();
  captchaContainer.textContent = captcha;

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const enteredCaptcha = captchaInput.value.trim();
    if (enteredCaptcha === captcha) {
      alert('Login Successful!');
	  window.location.href = 'dashboard.html';
    } else {
      alert('CAPTCHA is incorrect. Please try again.');
    }
    //function para mo hatag ug new captcha
    captcha = generateCaptcha();
    captchaContainer.textContent = captcha;
    // Clear input fields
    captchaInput.value = '';
  });
});
// para sa logout Button
 window.onload = function() {
      document.querySelector('.logout').addEventListener('click', function() {
        // Redirect to login page
        window.location.href = "loginform.html"; 
      });
    };
	// add to cart 
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartLink = document.querySelector('.cart-link');
  const cartIcon = document.querySelector('.cart');
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartIcon.textContent = cart.length;
  
  // Function para mag update sa cart
  const updateCartStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
	window.location.href = 'cart.html?cart=' + JSON.stringify(cart);
  };

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product_card');
      const productName = productCard.querySelector('h2').textContent;
      const productPrice = productCard.querySelector('span').textContent;

    // function para mag Create ug product object
      const product = {
        name: productName,
        price: productPrice
      };

      // Add items to cart
      cart.push(product);
      cartIcon.textContent = cart.length;

      updateCartStorage();
    });
  });

  // function para mo Handle sa click on the cart icon
  cartLink.addEventListener('click', function() {
    // Display cart items (logic to be implemented)
    console.log(cart);
  });
});

//cart.html
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const cartData = urlParams.get('cart');

  if (cartData) {
    const cart = JSON.parse(cartData);
    // function para i hatag ang mga items sa cart
    renderCartItems(cart);
  } else {
  }
});

function renderCartItems(cart) {
  const cartContainer = document.querySelector('.cart-container');
  cartContainer.innerHTML = ''; 
    //item1
    cart.forEach(item => {
    const itemElement = document.createElement('div');
    const itemImage = document.createElement('img');
    itemImage.src = 'pic/shoes.png'; // pic file location
    itemImage.alt = 'Shoes'; // alt name
    itemElement.appendChild(itemImage); // add the item image to the cart
    const itemNamePrice = document.createElement('div');
    itemNamePrice.textContent = `${item.name} - ${item.price}`;
    itemElement.appendChild(itemNamePrice); // Append the name and price to the item's div

    cartContainer.appendChild(itemElement); // Append the item's div to the cart container
  });
}
