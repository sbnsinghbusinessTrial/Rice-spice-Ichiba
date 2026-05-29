```javascript
// CART.JS

document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

});

// ADD TO CART

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("add-to-cart")) {

        const name = e.target.dataset.name;
        const price = Number(e.target.dataset.price);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let existing = cart.find(item => item.name === name);

        if (existing) {

            existing.quantity += 1;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });

        }

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert(name + " added to cart");

    }

});

// UPDATE CART COUNT

function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalQty = 0;

    cart.forEach(item => {

        totalQty += Number(item.quantity || 1);

    });

    let cartCount = document.getElementById("cartCount");

    if (cartCount) {

        cartCount.textContent = totalQty;

    }

}

// SHOW CART DATA

function showCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let output = "";

    let grandTotal = 0;

    cart.forEach(item => {

        let subtotal = item.price * item.quantity;

        grandTotal += subtotal;

        output +=
            item.name +
            " | Qty: " + item.quantity +
            " | Price: ¥" + item.price +
            " | Total: ¥" + subtotal +
            "\n";

    });

    output += "\nGrand Total: ¥" + grandTotal;

    alert(output);

}
```
