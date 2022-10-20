let boraJogar=0;
let numCartas= prompt("Olá, vamos jogar um jogo! 😁 \nDigite um número par entre 4 e 14");

do{
/*Esse if foi colocado exatamente para sair quando o usuário clicar em "cancelar"*/
if (numCartas===null ){
   boraJogar=1
} 
else {
numCartas = Number(numCartas);
const numImpar = numCartas%2;

if ((numCartas>=4 &&numCartas<=14) && (numImpar==0)){
    boraJogar=1;
  adicionarCartas(numCartas)
}
else{
numCartas= prompt("Olá, vamos jogar um jogo! 😁 \nDigite um número par entre 4 e 14");
}
}
}while  (boraJogar!=1)

function adicionarCartas(numCartas){
    const adicionarCartas = document.querySelector('.cartas');

for(let contador=0;contador<numCartas; contador++){
adicionarCartas.innerHTML += `<div class="carta centHorVert" onclick="virarCarta(this)"> 
<img src="Imagens/Para as cartas/back.png" class="MostrarParrot"/>
</div>`
} 

}

function virarCarta(cartaSelecionada){
 cartaSelecionada.classList.toggle("virar")

}

// do{
// const parada = prompt(`Parabéns! Você encerrou o jogo em XX:XX minutos e com XX jogadas! 

// Deseja jogar novamente?`)
// console.log(parada)

// }while (parada==="sim")