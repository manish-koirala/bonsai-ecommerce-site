/* This is a script that increases or decreases the cart number based on how many items have been added
to the cart. */

var addToCartButtons = document.getElementsByClassName('add-to-cart');
var cartNumHolder = document.getElementById('cart-num');
// This is an array of booleans which stores the state of add-to-cart button. Either true or false. 
var added = [];

// Add to cart functionality is added to each and every 'Add To Cart' buttons.
for (let i=0; i < addToCartButtons.length ; i++) {
    added[i] = false;
    addToCartButtons[i].addEventListener("click", () => {
        if (!added[i]) {
            addToCartButtons[i].firstElementChild.innerText = "Added to Cart";
            addToCartButtons[i].classList.add('added-to-cart');
            added[i] = true;
        }
        else {
            addToCartButtons[i].firstElementChild.innerText = "Add to Cart";
            addToCartButtons[i].classList.remove('added-to-cart');
            added[i] = false;
            cartNumHolder.innerText = String(cartNum);
        }
        var cartNum = document.getElementsByClassName('added-to-cart').length;
        cartNumHolder.innerText = String(cartNum);       
    });
}















