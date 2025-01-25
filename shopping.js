// Initialize an empty cart
let cart = [];

// Function to update cart count and details
function updateCartDisplay() {
    // Update the cart count
    document.getElementById('cart-count').innerText = cart.length;

    // Cart items and total only exist in the cart.html page
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cartItems) {
        // Update the cart items list
        cartItems.innerHTML = cart
            .map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`)
            .join('');
        // Update the total price
        cartTotal.innerText = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    }
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.product;
        const price = parseFloat(button.dataset.price);

        // Add product to the cart
        cart.push({ name, price });

        // Update the cart display
        updateCartDisplay();

        // Notify user
        alert(`${name} has been added to the cart!`);
    });
});

// Update the cart display on page load
updateCartDisplay();
