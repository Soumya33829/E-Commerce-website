let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;

    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}