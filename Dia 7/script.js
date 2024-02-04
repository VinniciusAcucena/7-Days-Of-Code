const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacao = document.getElementById('operacao');
const resultado = document.querySelector(".resultado");

function soma(n1, n2) {
    resultado.innerText = `O resultado é: ${n1 + n2}`;
}

function subtracao(n1, n2) {
    resultado.innerText = `O resultado é: ${n1 - n2}`;
}

function multiplicacao(n1, n2) {
    resultado.innerText = `O resultado é: ${n1 * n2}`;
}

function divisao(n1, n2) {
    resultado.innerText = `O resultado é: ${n1 / n2}`;
}

function calcular() {
    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);
    switch(operacao.value) {
        case "soma":
            soma(n1, n2);
            break;

        case "subtracao":
            subtracao(n1, n2);
            break;

        case "multiplicacao":
            multiplicacao(n1, n2);
            break;

        case "divisao":
            divisao(n1, n2);
            break;
    }


}