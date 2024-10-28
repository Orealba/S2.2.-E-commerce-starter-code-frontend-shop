import { products } from './products.js';

var cart = [];

var total = 0;

function buy(id) {
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

function cleanCart() {
  cart = [];
  document.getElementById('cart_list').innerHTML = '';

  calculateTotal();
  document.getElementById('total_price').textContent = total.toFixed(2);
  document.getElementById('count_product').textContent = '0';
}

function calculateTotal() {
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

function applyPromotionsCart(cart) {
  cart.forEach((item) => {
    let product = products.find((p) => p.id == item.id);
    if (product && product.offer && item.quantity >= product.offer.number) {
      item.subtotalWithDiscount =
        item.price * item.quantity * (1 - product.offer.percent / 100);
    } else {
      item.subtotalWithDiscount = undefined;
    }
  });
}

function printCart() {
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

    let deleteCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.className = 'btn btn-secundary btn-sm';
    deleteButton.onclick = function () {
      removeFromCart(item.id);
    };
    deleteCell.appendChild(deleteButton);

    row.appendChild(productCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(totalCell);
    row.appendChild(deleteCell);

    document.getElementById('cart_list').appendChild(row);
  });

  calculateTotal();
}

function removeFromCart(id) {
  let productInCart = cart.find((item) => item.id == id);

  if (!productInCart) {
    console.log('Error! Producto no encontrado en el carrito');
    return;
  }

  if (productInCart.quantity === 1) {
    cart = cart.filter((item) => item.id !== id);
  } else {
    productInCart.quantity -= 1;
  }

  applyPromotionsCart(cart);
  calculateTotal();
  updateCartCaount();
  printCart();
}

window.buy = buy;
window.cleanCart = cleanCart;
window.printCart = printCart;
