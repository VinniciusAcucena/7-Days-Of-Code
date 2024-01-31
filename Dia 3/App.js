let msg = `Incrível! então você quer aprender: `;


function perguntaArea() {
    let area = prompt('Qual area da tecnologia você pretende seguir? (1) Front-End  (2) Back-End');

    if(area == 1) {
        frontEnd();
    } else if (area == 2) {
        backEnd();
    } else {
        alert('Resposta Inválida!');
        perguntaArea();
    }

    prompt('E você gostaria de seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack')
}

function frontEnd() {
    let stacks = prompt('Em Front-End, você quer aprender: (1) React  (2) Vue');

    if (stacks == 1) {
        msg += 'React';
    } else if (stacks == 2) {
        msg += 'Vue';
    } else {
        alert('Resposta Inválida!');
        frontEnd();
    }


}

function backEnd() {
    let stacks = prompt('Em Back-End, você quer aprender: (1) C#  (2) Java');

    if (stacks == 1) {
        msg += 'C#';
    } else if (stacks == 2) {
        msg += 'Java';
    } else {
        alert('Resposta Inválida!');
        frontEnd();
    }
}

function tecnologias() {
    for (let resposta = ''; resposta.toLowerCase() !== 'ok';) {
        msg += ', ' + prompt('Qual outra tecnologia você deseja estudar?');
        resposta = prompt('Deseja adicionar mais alguma tecnologia? (Digite OK caso não queira adicionar mais)');
    }
}

perguntaArea();
tecnologias();

alert(msg);
