menu = document.querySelector(".menu")
function dropdown() {
    navbar = document.querySelector(".navbar")
    navbar.classList.toggle("active")
}

menu.addEventListener("click", dropdown)
