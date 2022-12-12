const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartMenu = document.querySelector(".product-detail")


navEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click',toggleCartMenu);

function toggleDesktopMenu() {
    const isCartClosed = cartMenu.classList.contains('inactive');
    if(!isCartClosed)
        cartMenu.classList.toggle('inactive')
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    const isCartClosed = cartMenu.classList.contains('inactive');
    if(!isCartClosed)
        cartMenu.classList.toggle('inactive')
    mobileMenu.classList.toggle("inactive");
}

function toggleCartMenu() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed)
        mobileMenu.classList.toggle('inactive');
    if(!isDesktopMenuClosed)
        desktopMenu.classList.toggle('inactive');

    cartMenu.classList.toggle("inactive");
}