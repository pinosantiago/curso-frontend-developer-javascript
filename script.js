const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartMenu = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container")


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

const productList = [];

productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Monitor',
    price: 300,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=2',
});
productList.push({
    name:'Apartment',
    price: 2300,
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=2',
});

function renderProducts(List){
    for (product of List){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const img = document.createElement('img');
        img.setAttribute('src', product.image)
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;   
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        const productInfoFigure = document.createElement('figure');
        
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
     
         //Aquuí terminamos la creacion de etiquetas
         //Ahora debemos meter las etiquetas unas dentro de otras
     
     
        productInfoFigure.appendChild(productImgCart); //Metemos la imagen dentro de la etiqueta Figure
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
     
        cardContainer.appendChild(productCard);
     
     
     }
}

renderProducts(productList);

//Creacion de las etiquetas



