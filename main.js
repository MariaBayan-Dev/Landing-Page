//MENU HAMBURGUESA

//CARGAR HTML AL JS

const menuHamburguer = document.querySelector('.hamburguer')
const menuNav = document.querySelector('.menu-nav')

//ESCUCHAR CLICK EN EL BOTON

menuHamburguer.addEventListener('click', () =>{
    menuNav.classList.toggle('active')
})

//FLECHA QUE DESAPARECE

const arrowUp = document.querySelector('.footer-up')

window.addEventListener('scroll', () => {
    if(window.scrollY > window.innerHeight / 2){
        arrowUp.classList.add('visible')
    }else{
        arrowUp.classList.remove('visible')
    }
})