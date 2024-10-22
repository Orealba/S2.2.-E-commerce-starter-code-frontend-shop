// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: 'cooking oil',
    price: 10.5,
    type: 'grocery',
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: 'Pasta',
    price: 6.25,
    type: 'grocery',
  },
  {
    id: 3,
    name: 'Instant cupcake mixture',
    price: 5,
    type: 'grocery',
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: 'All-in-one',
    price: 260,
    type: 'beauty',
  },
  {
    id: 5,
    name: 'Zero Make-up Kit',
    price: 20.5,
    type: 'beauty',
  },
  {
    id: 6,
    name: 'Lip Tints',
    price: 12.75,
    type: 'beauty',
  },
  {
    id: 7,
    name: 'Lawn Dress',
    price: 15,
    type: 'clothes',
  },
  {
    id: 8,
    name: 'Lawn-Chiffon Combo',
    price: 19.99,
    type: 'clothes',
  },
  {
    id: 9,
    name: 'Toddler Frock',
    price: 9.99,
    type: 'clothes',
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found prsoduct to the cart array
  //tengo que hacer un for para agregar al array cart los productos, cuando alguien le da al boton añadir, se debe llamar a la funt buy y agregar el producto al array
  let product = products.find((p) => p.id == id);
  if (!product) {
    console.log('Error! Producto no encontrado');
    return;
  }

  let productsInTheCart = cart.find((item) => item.id == id);
  if (productsInTheCart) {
    productsInTheCart.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }
  applyPromotionsCart(cart);
  updateCartCaount();
}

function updateCartCaount() {
  let countOfProducts = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('count_product').textContent = countOfProducts;
}

// Exercise 2
function cleanCart() {
  cart = [];
  document.getElementById('cart_list').innerHTML = '';

  calculateTotal();
  document.getElementById('total_price').textContent = total.toFixed(2);
  document.getElementById('count_product').textContent = '0';
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  applyPromotionsCart(cart);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].subtotalWithDiscount !== undefined) {
      total += cart[i].subtotalWithDiscount;
    } else {
      total += cart[i].price * cart[i].quantity;
    }
  }
  document.getElementById('total_price').textContent = total.toFixed(2);
}

// Exercise 4
function applyPromotionsCart(cart) {
  // Apply promotions to each item in the array "cart"
  cart.forEach((item) => {
    let product = products.find((p) => p.id == item.id);
    if (product && product.offer) {
      if (
        product.name === 'cooking oil' &&
        item.quantity >= product.offer.number
      ) {
        item.subtotalWithDiscount =
          item.price * item.quantity * (1 - product.offer.percent / 100);
      } else if (
        product.name === 'Instant cupcake mixture' &&
        item.quantity >= product.offer.number
      ) {
        item.subtotalWithDiscount =
          item.price * item.quantity * (1 - product.offer.percent / 100);
      } else {
        item.subtotalWithDiscount = undefined;
      }
    }
  });
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  document.getElementById('cart_list').innerHTML = '';
  cart.forEach((item) => {
    let row = document.createElement('tr');
    let productCell = document.createElement('th');
    productCell.textContent = item.name;

    let priceCell = document.createElement('td');
    priceCell.textContent = `$${item.price}`;

    let quantityCell = document.createElement('td');
    quantityCell.textContent = item.quantity;

    let totalCell = document.createElement('td');
    let totalItemPrice = item.price * item.quantity;
    totalCell.textContent = `$${totalItemPrice}`;

    row.appendChild(productCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(totalCell);
    document.getElementById('cart_list').appendChild(row);
  });

  calculateTotal();
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  //   printCart();
  //   console.log(cart);
}
