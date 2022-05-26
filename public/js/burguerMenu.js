let $btnBurguer = document.querySelector('.nav-toggle')
let $menuContainer = document.querySelector('.nav-menu')
let $btnBurguerIcon = document.querySelector('#burguerIcon')

$btnBurguer.addEventListener('click', () => {
    $menuContainer.classList.toggle('nav-menu_visible')
    $btnBurguerIcon.classList.toggle('fa-times')
})