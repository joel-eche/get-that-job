function openMenuMobile() {
    var element = document.getElementById("navbar-mobile");
    console.log('1')
    element.classList.remove("menu-closed");
    element.classList.add("menu-opened");
}

function closeMenuMobile() {
    console.log('2')
    var element = document.getElementById("navbar-mobile");
    element.classList.remove("menu-opened");
    element.classList.add("menu-closed");
}
