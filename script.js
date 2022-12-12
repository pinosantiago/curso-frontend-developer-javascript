const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartMenu = document.querySelector("#shopping-cart");
const cardContainer = document.querySelector(".cards-container")
const productDetail = document.querySelector("#product-detail");
const productDetailClose = document.querySelector(".product-detail-close");


navEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click',toggleCartMenu);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    
    const isCartClosed = cartMenu.classList.contains('inactive');
    const isDetailClosed = productDetail.classList.contains('inactive');
    
    if(!isCartClosed)
        cartMenu.classList.toggle('inactive')
    if(!isDetailClosed)
        productDetail.classList.toggle('inactive')
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isCartClosed = cartMenu.classList.contains('inactive');
    const isDetailClosed = productDetail.classList.contains('inactive');
    
    if(!isCartClosed)
        cartMenu.classList.toggle('inactive')
    if(!isDetailClosed)
        productDetail.classList.toggle('inactive')

    mobileMenu.classList.toggle("inactive");
}

function toggleCartMenu() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDetailClosed = productDetail.classList.contains('inactive');
    
    if(!isMobileMenuClosed)
        mobileMenu.classList.toggle('inactive')
    if(!isDesktopMenuClosed)
        desktopMenu.classList.toggle('inactive')
    if(!isDetailClosed)
        productDetail.classList.toggle('inactive')

    cartMenu.classList.toggle("inactive");
}

function openProductDetail(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isCartClosed = cartMenu.classList.contains('inactive');
    if(!isCartClosed)
        cartMenu.classList.toggle('inactive')
    if(!isMobileMenuClosed)
        mobileMenu.classList.toggle('inactive')
    if(!isDesktopMenuClosed)
        desktopMenu.classList.toggle('inactive')
    
    
    productDetail.classList.remove("inactive");
}

function closeProductDetail(){
    productDetail.classList.add("inactive");
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

productList.push({
    name:'GGGGATTTO',
    price: -1000,
    image: './GGGGGGATO.jpeg',
});
function renderProducts(List){
    for (product of List){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetail);
        
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
        
            //Aquí terminamos la creacion de etiquetas
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





