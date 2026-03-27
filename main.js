//MENU HAMBURGUESA

//CARGAR HTML AL JS

const menuHamburguer = document.querySelector('.hamburguer')
const menuNav = document.querySelector('.menu-nav')

//ESCUCHAR CLICK EN EL BOTON

menuHamburguer.addEventListener('click', () =>{
    menuNav.classList.toggle('active')
})