let boraJogar=0; /*Variável que, quando igual a 1, inicia a partida. Essencial na função iniciarJogo*/ 
let numCartas;
let contadorCartasClicadas =0; /*Variável que, quando igual a 2, permite comparar as cartas*/ 

let contadorJogadas=0;
let contadorAcerto =0;
let tempoPartida =0;
let statusJogo =0;  /*Variável que quando ficar "jogando" vai contabilizar o tempo e quando estiver "ganhou" para a contagem do tempo*/ 

let cartaVirada=[];

// let primeiraCarta;
// let segundaCarta;
const numCartasSelecionadas=[]; 

/*Array com as imagens dos parrots*/ 
const imgParrots=[
  'bobrossparrot.gif',
  'explodyparrot.gif',
  'fiestaparrot.gif',
  'metalparrot.gif',
  'revertitparrot.gif',
  'tripletsparrot.gif',
  'unicornparrot.gif'
];

/*Função responsável pelo prompt inicial, que pergunta o numero de cartas*/
  numCartas = prompt("Olá, vamos jogar Parrots Card! 😁 \nDigite um número par entre 4 e 14");
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
           
            /*Ajusta o código para que a div  cartas fique com o tamanho ideal para numCartas, dividindo igualmente em duas linhas*/
            let widthJogo = (numCartas)/2 *150
            let dim = document.querySelector(".cartas");
            dim.style.width = widthJogo + "px"
       
            /*adicionarCartas(numCartas);*/
            colocarVerso(numCartas);
            
            /*O jogo inicialmente vai começar com todas cartas viradas. O tempo para memorizar é propocional ao número de cartas escolhido!*/ 
            setTimeout(desvirarCartaInicial, (numCartas*300));
            }
            else{
            numCartas= prompt("Olá, vamos jogar um jogo! 😁 \nDigite um número par entre 4 e 14");
            }
    }
    }while  (boraJogar!=1)

/*Função repsonsável para colocar um verso nas cartas*/ 
function  colocarVerso(numCartas){

  for (let i=0; i<(numCartas/2); i++){
  numCartasSelecionadas.push(imgParrots[i]);
  numCartasSelecionadas.push(imgParrots[i]);
  }

adicionarCartas();
}

/*Adiciona a quantidade de cartas desejadas pelo usuário*/ 
function adicionarCartas(){
    const adicionarCartas = document.querySelector('.cartas');

numCartasSelecionadas.sort(embaralhar); /*Embaralha o array*/
for(let i=0; i< numCartasSelecionadas.length; i++){
adicionarCartas.innerHTML += `<div class="carta virar" onclick="virarCarta(this)"> 
<div class="face frenteCarta centHorVert ${numCartasSelecionadas[i]}">
<img class="papagaioFrente"  src="Imagens/Para as cartas/${numCartasSelecionadas[i]}" />
</div>

<div class="face versoCarta centHorVert">
<img class="papagaioVerso" src="Imagens/Para as cartas/back.png"/>
</div>

</div>`
} 
}

function virarCarta(cartaSelecionada){
  cartaSelecionada.classList.add("virar");
  contadorCartasClicadas++;

if (contadorCartasClicadas==2){
cartaVirada = document.querySelectorAll(".virar .frenteCarta");
/*cartaVirada vai retornar uma nodeList*/

let primeiraCarta=cartaVirada[0].classList.value;
let segundaCarta=cartaVirada[1].classList.value;

contadorCartasClicadas=0;
// cartaVirada = []; /*Zera  o contador*/
compararCartas(primeiraCarta, segundaCarta);
} 
}

function desvirarCarta(){
  const desvirarCarta = document.querySelectorAll(".carta.virar");
  desvirarCarta[0].classList.remove("virar")
  desvirarCarta[1].classList.remove("virar")

  // for (let i=0; i<desvirarCarta.length; i++){
  // desvirarCarta[i].classList.remove("virar");
  // }

  contadorJogadas++;
  finalizarJogo(contadorAcerto, contadorJogadas)
} 

function desvirarCartaInicial(){
  const desvirarCarta = document.querySelectorAll(".carta.virar");
  for (let i=0; i<desvirarCarta.length; i++){
  desvirarCarta[i].classList.remove("virar");
   }
  }

function compararCartas(primeiraCarta, segundaCarta){
 if (primeiraCarta==segundaCarta){

contadorAcerto++;
contadorJogadas++;

/*Esse setTimeOut permite ver a última carta antes do prompt aparecer!*/
setTimeout(function(){finalizarJogo(contadorAcerto, contadorJogadas)}, 650) 


/*console.log("Número de acertos: " + contadorAcerto);
console.log("Número de jogadas: " + contadorJogadas);*/
 } 
 else {
  setTimeout (desvirarCarta, 1000);
 }
}

/*Código que pediram pra eu colocar*/
function embaralhar() { 
	return Math.random() - 0.5; 
}

function finalizarJogo(contadorAcerto, contadorJogadas){
if (contadorAcerto==(numCartas/2)){
  const parada = prompt(`Parabéns! Você encerrou o jogo em XX:XX segundos e com ${contadorJogadas} jogadas! 

  Deseja jogar novamente?`)
  console.log(parada)
}
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
// //  -> SEM PARÊNTESES NO PARÂMETRO!
// }


//setInterval(iniciarJogo, 1s)  //contador de tempo do bônus, ele vai liberar um códigozinho no console, vamos utilizar esse código para parar
//const codigo = setInterval(iniciarJogo, 1s) 
//clearInterval(codigo) // para parar a contagem do tempo

