let $btnConfig = document.querySelector(".btn-config");

$btnConfig.addEventListener('click', () => {
    /* confirm("btn config") */
    /* confirm("Press a button!"); */
    /* confirm("Press a button!\nEither OK or Cancel."); */
    let person = prompt("Please enter your name");

    if (person == "Ariel Andrade") {
        alert("login")
    }
    alert("Bienvenido " + person.toLowerCase())
})