let $btnConfig = document.querySelector(".btn-config");
let $btnClose = document.querySelector(".btn-closed");
let $formLogin = document.querySelector(".form-login-container")

    $btnConfig.addEventListener('click', () => {
        $formLogin.style.display = 'flex'
})
    $btnClose.addEventListener('click', () => {
        $formLogin.style.display = 'none'
})
