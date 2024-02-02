const produtoInput = document.getElementById('produto');
const categoriaInput = document.getElementById('categoria');
const listaLegumes = document.querySelector('.legumes');
const listaFrutas = document.querySelector('.frutas');
const listaVerduras = document.querySelector('.verduras');
const listaLatcionios = document.querySelector('.laticinios');
const listaCarnes = document.querySelector('.carnes');
const listaDoces = document.querySelector('.doces');
const listaLimpeza = document.querySelector('.limpeza');
const listaOutros = document.querySelector('.outros');


let legumes= []
let frutas= []
let verduras= []
let laticinios= []
let carnes= []
let doces= []
let limpeza= []
let outros= []


function adicionarProduto() {

    switch (categoriaInput.value) {
        case 'legumes':
            legumes.push(' ' + produtoInput.value);
            break;
        
        case 'frutas':
            frutas.push(' ' + produtoInput.value);
            break;

        case 'verduras':
            verduras.push(' ' + produtoInput.value);
            break;

        case 'laticinios':
            laticinios.push(' ' + produtoInput.value);
            break;

        case 'carnes':
            carnes.push(' ' + produtoInput.value);
            break;

        case 'doces':
            doces.push(' ' + produtoInput.value);
            break;

        case 'limpeza':
            limpeza.push(' ' + produtoInput.value);
            break;

        case 'outros':
            outros.push(' ' + produtoInput.value);
            break;
    }

    imprimirLista();
}

function imprimirLista (){
    if (legumes.length !== 0) {
        listaLegumes.innerText = `legumes: ${legumes} `;
    }

    if (frutas.length !== 0) {
        listaFrutas.innerText = `Frutas: ${frutas} `;
    }

    if (verduras.length !== 0) {
        listaVerduras.innerText = `verduras: ${verduras} `;
    }

    if (laticinios.length !== 0) {
        listaLatcionios.innerText = `Laticínios: ${laticinios} `;
    }

    if (carnes.length !== 0) {
        listaCarnes.innerText = `Carnes: ${carnes} `;
    }

    if (doces.length !== 0) {
        listaDoces.innerText = `Doces: ${doces} `;
    }

    if (limpeza.length !== 0) {
        listaLimpeza.innerText = `Limpeza: ${limpeza} `;
    }

    if (outros.length !== 0) {
        listaOutros.innerText = `Outros: ${outros} `;
    }
} 