let cartCount = 0;

function addToCart(flowerName, price) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert(`${flowerName} has been added to your cart!`);
}
