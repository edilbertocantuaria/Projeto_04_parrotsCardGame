let boraJogar=0;
let numCartas= prompt("Olá, vamos jogar um jogo! 😁 \nDigite um número par entre 4 e 14");

const parrots=[
  'bobrossparrot.gif',
  'explodyparrot.gif',
  'fiestaparrot.gif',
  'metalparrot.gif',
  'revertitparrot.gif',
  'tripletsparrot.gif',
  'unicornparrot.gif'
];

const numCartasSelecionadas=[]; 




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

  let widthJogo = (numCartas)/2 *150
  let dim = document.querySelector(".cartas");
  dim.style.width = widthJogo + "px"
   
  adicionarCartas(numCartas);
  colocarVerso(numCartas);

}
else{
numCartas= prompt("Olá, vamos jogar um jogo! 😁 \nDigite um número par entre 4 e 14");
}
}
}while  (boraJogar!=1)

function adicionarCartas(numCartas){
    const adicionarCartas = document.querySelector('.cartas');

for(let contador=0;contador<numCartas; contador++){
adicionarCartas.innerHTML += `<div class="carta" onclick="virarCarta(this)"> 
<div class="face frenteCarta centHorVert">
<img class="papagaioFrente" src="Imagens/Para as cartas/tripletsparrot.gif" class="MostrarParrot"/>
</div>

<div class="face versoCarta centHorVert">
<img class="papagaioVerso" src="Imagens/Para as cartas/back.png" class="MostrarParrot"/>
</div>

</div>`
} 
}

function virarCarta(cartaSelecionada){
 cartaSelecionada.classList.toggle("virar")
}


// function virarCarta(cartaSelecionada,  imgPapagaio){
// const imgPapagaioVirado =document.querySelector('.virar .versoCarta .papagaioVerso');
// imgPapagaio = document.querySelector('.versoCarta .papagaioVerso');
// //  imgPapagaio = document.querySelector('.versoCarta .papagaioVerso');

// if (imgPapagaioVirado===null){
// imgPapagaio.classList.add("ocultarCarta")
// alert("entrou no if")
// console.log(imgPapagaio)
// } else { 
//   imgPapagaio.classList.remove("ocultarCarta")
//  alert("entrou no else")
//   console.log(imgPapagaio)
// }
// cartaSelecionada.classList.toggle("virar")

//  const ocultarCartaSelecionada = document.querySelector (".carta .versoCarta .virar")
// console.log (ocultarCartaSelecionada)

// cartaSelecionada.classList.toggle("versoCarta ocultarCarta")

// }

// do{
// const parada = prompt(`Parabéns! Você encerrou o jogo em XX:XX minutos e com XX jogadas! 

// Deseja jogar novamente?`)
// console.log(parada)

// }while (parada==="sim")

// function compararCartas(){
// //pega as cartas viradas e compara se elas são iguais
// //se são iguais, não vai virar novamente
// //se são  diferentes, vai desvirar dentro de 1s  
// // setTimeout (desvirarCartas, 1000)  -> SEM PARÊNTESES NO PARÂMETRO!
// }


//setInterval(iniciarJogo, 1s)  //contador de tempo do bônus, ele vai liberar um códigozinho no console, vamos utilizar esse código para parar
//const codigo = setInterval(iniciarJogo, 1s) 
//clearInterval(codigo) // para parar a contagem do tempo

