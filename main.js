console.log("todo funciona")


window.onload = () => {
    document.querySelector(".card").classList.add(generadortipos());
    document.querySelector(".card").innerHTML = generadornumeros();
};

function generadornumeros () {
    let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexnumeros = Math.floor(Math.random() * numeros.length);
    return numeros[indexnumeros]
};

function generadortipos() {
    let tipos = ["pica", "diamante", "trebol", "corazon"];
    let indextipos = Math.floor(Math.random() * tipos.length);
    return tipos[indextipos]

};