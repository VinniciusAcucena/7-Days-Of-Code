const numeroComputador = Math.floor(Math.random() * (10 - 0 + 1));
console.log(numeroComputador);

let contador = 3;
let acertou = false;

while ((contador > 0)) {
    let numeroJogador = prompt('Adivinhe um número de 0 a 10');
    
    if(numeroJogador == numeroComputador) {
        acertou = true;
        break;
    } else {
        contador--;
        alert(`Número errado! Tentativas restantes: ${contador}`);
        
    }


} 

if(acertou === true) {
    alert(`Parabéns! Você adivinhou o número sorteado`);
} else {
    alert(`Fim das tentativas. O valor sorteado foi ${numeroComputador}`);
}




