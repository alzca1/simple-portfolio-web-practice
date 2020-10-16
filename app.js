const hamburguer = document.querySelector('.header .nav-bar .nav-list .hamburger')
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul')
const header = document.querySelector('.header.container')
const link = document.getElementById('link');


function toggleMenu () {
    hamburguer.classList.toggle('active')
    mobileMenu.classList.toggle('active')
}
hamburguer.addEventListener('click', () => {
    toggleMenu(); 
})

mobileMenu.addEventListener('click' , () => {
   toggleMenu()
})

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; 
    if(scrollPosition > 250){
        header.style.backgroundColor = "#29323c"
    }else{
        header.style.backgroundColor = "transparent"
    }
})