document.addEventListener("DOMContentLoaded", function() {

    fetch("../header.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("header").innerHTML = data;

            // Update cart count AFTER header is loaded
            if (typeof updateCartCount === "function") {
                updateCartCount();
            }

        });

    fetch("../footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

});