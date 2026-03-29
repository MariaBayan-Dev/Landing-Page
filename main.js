//MENU HAMBURGUESA

//CARGAR HTML AL JS

const menuHamburguer = document.querySelector('.hamburguer')
const menuNav = document.querySelector('.menu-nav')
const navLinks = document.querySelectorAll('.menu-nav a')


//ESCUCHAR CLICK EN EL BOTON

menuHamburguer.addEventListener('click', () =>{
    menuNav.classList.toggle('active')
    menuHamburguer.classList.toggle('active')
})

//CERRAR MENU

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('active')
        menuHamburguer.classList.remove('active')
    })
})


//FLECHA QUE DESAPARECE

const arrowUp = document.querySelector('.footer-up')

window.addEventListener('scroll', () => {
    if(window.scrollY > window.innerHeight * 0.5){
        arrowUp.classList.add('visible')
    }else{
        arrowUp.classList.remove('visible')
    }
})