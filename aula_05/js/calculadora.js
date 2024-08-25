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
    let operador = parseInt(document.getElementById("operador").value);
    if (operador == 1) {
        return somar();
    } else if (operador  == 2) {
        return subtrair();
    } else if (operador == 3) {
        return multiplicar();
    } else if (operador == 4) {
        return dividir();
    }  
}
function resultadoEstilo() {
    let resposta = resultado();
    let result = document.getElementById("resultado");
    if (resposta > 0) {
        result.style.backgroundColor = 'green';
    } else if (resposta < 0) {
        result.style.backgroundColor = 'red';
    } else {
        result.style.backgroundColor = 'gray';
    }
    result.value = resposta;
}