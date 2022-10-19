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
  
    /*adicionarCartas.classList.add('carta')
    console.log(adicionarCartas);*/
}
else{
numCartas= prompt("Olá, vamos jogar um jogo! 😁 \nDigite um número par entre 4 e 14");
}
}
}while  (boraJogar!=1)

function adicionarCartas(numCartas){
    const adicionarCartas = document.querySelector('.cartas');
let contador=0;

do{
adicionarCartas.innerHTML += `<div class="carta centHorVert" onclick="virarCarta()"> 
<img src="Imagens/Para as cartas/back.png"/>
</div>`
contador++
console.log(contador)
} while (numCartas>contador)
   console.log(adicionarCartas) 

}