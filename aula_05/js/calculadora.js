function num1() {
    return parseFloat(document.getElementById("num1").value);
}

function num2() {
    return parseFloat(document.getElementById("num2").value);
}

function soma() {
    informaResultado(num1() + num2());
}