const nomeInput = document.getElementById('nome-input');
const idadeInput = document.getElementById('idade-input');
const linguagemInput = document.getElementById('linguagem-input');
const resposta = document.getElementById('resposta');
const opcional = document.querySelector(".opcional");
const perguntaOpcional = document.querySelector('.pergunta-opcional');
const respostaInput = document.getElementById('resposta-opcional');
const spnOpcional = document.querySelector('.spanOpcional');

function AtribuirDados() {
    let nome = nomeInput.value
    let idade = idadeInput.value
    let linguagem = linguagemInput.value

    resposta.innerText = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`;

    opcional.classList.remove('hidden');
    perguntaOpcional.innerHTML = `Você gosta de estudar ${linguagem}? 
        Responda <strong>1</strong> para <strong>SIM</strong> e <strong>2</strong> para <strong>NÃO</strong>`;
}

function responder() {
    let respostaOpcional = respostaInput.value;
    
    if(respostaOpcional == 1) {
        spnOpcional.innerText = 'Muito bom! Continue estudando e você terá muito sucesso.';
    } else {
        spnOpcional.innerText = 'Ahh que pena... Já tentou aprender outras linguagens?';
    }


}


