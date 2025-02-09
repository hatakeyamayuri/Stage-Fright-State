let iconCart = document.querySelector('.icon-cart');
let closeCarte = document.querySelector('.close');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeCarte.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

