function num1() {
    return parseFloat(document.getElementById("num1").value);
}

function num2() {
    return parseFloat(document.getElementById("num2").value);
}

function somar() {
    return (num1() + num2());
}

function subtrair() {
    return (num1() - num2());
}

function multiplicar() {
    return (num1() * num2());
}

function dividir() {
    return (num1() / num2());
}

function resultado() {
    let operador = document.getElementById("operador");
    let result;
        if (operador.value == 1) {
            result = somar();
        } else if (operador.value  == 2) {
            result = subtrair();
        } else if (operador.value  == 3) {
            result = multiplicar();
        } else if (operador.value  == 4) {
            result = dividir();
        }
        document.getElementById("resultado").innerHTML = result;  
}