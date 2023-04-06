import { setNotificationToCart } from "./cart/cart_notification.js"

function render_header(){
    document.querySelector('#render_header').innerHTML = render()
    function render()
    {
        return `
            <div class="logo"><img src="./images/logo.png" alt=""></div>
            <div id="NavBar">
                <ul>
                    <li><a href="index.html" class="nav_link active">HOME</a></li>
                    <li><a href="" class="nav_link" >ABOUT</a></li>
                    <li><a href="bills.html" class="nav_link">BILLS</a></li>
                    <li><span id="notification_cart"></span><a href="cart.html" class="nav_link"><i class="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
            </div>
        `
    }
    setNotificationToCart()
        var NavBar = document.getElementById("NavBar");
        var nav_link = NavBar.getElementsByClassName("nav_link");

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i <nav_link.length; i++) {
        nav_link[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
}
    
}
render_header()
export {render_header}
