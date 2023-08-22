// JS for Navbar setting .active item's class or scroll behavior

const navbarItems = document.querySelectorAll(".navbar-item");

navbarItems.forEach(item => {
    item.addEventListener('click',() => {
        navbarItems.forEach(item => 
            item.classList.remove("active"));
            item.classList.add("active")
    })
})