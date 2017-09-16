var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100)

  cart.push({ [item]: itemPrice })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    return console.log('Your shopping cart is empty.')
  }
  for (var i = 0; i < cart.length; i++) {
      var itemsWithPrices = cart[i]
      var itemName = Object.keys(itemsWithPrices)[i]
      var itemPrice = itemsWithPrices[itemName]
      console.log(`In your cart, you have ${itemName} at ${itemPrice}.`)
    }
  }


function total() {
  var emptyTotal = 0
  for (var i = 0; i < cart.length; i++) {
    emptyTotal += cart[i]
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
