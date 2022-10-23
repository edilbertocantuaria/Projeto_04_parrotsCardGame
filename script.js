let boraJogar=0; /*Variável que, quando igual a 1, inicia a partida. Essencial na função iniciarJogo*/ 
let boraParar=0;/*Variável que, quando igual a 1, reinicia/cancela a partida. Essencial na função finalizarJogo*/
let boraDificultar=0; /*Variável que, quando igual a 1, sinaliza a inserção do nível de dificuldade*/ 
let contadorCartasClicadas =0; /*Variável que, quando igual a 2, permite comparar as cartas*/ 

let codigoPararCronometro;
let numCartas;

let contadorJogadas=0;
let contadorAcerto =0;
let tempoPartida =0;

let cartaVirada=[];
let numCartasSelecionadas=[]; 

/*Array com as imagens dos parrots*/ 
const imgParrots=[
  'lj1.jpg',
  'lj2.jpg',
  'lj3.jpg',
  'pp4.jpg',
  'pp5.jpg',
  'pp6.jpg',
  'pp7.jpg',
  'pp8.jpg',
];

iniciarJogo()
/*Função responsável pelo prompt inicial, que pergunta o numero de cartas*/
function iniciarJogo(){  
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
          do{
            let nivelDificuldade = prompt (
         `Antes de jorgamos, vamos escolher o nível de dificuldade? Vou te mostrar o jogo por um tempo proporcional ao número de cartas e ao nível de ficuldade que você escolher! O tempo da partida só será contabilizado assim que todas cartas virarem" 🤓
         fácil  - 1 segundo para ver cada carta [de 4s a 14s para memorizar];
         médio - 0,5 segundos para ver cada carta [de 2s a 7s para memorizar];
         difícil - 0,3 segundos para ver cada carta. [de 1,2s a 4,2s para memorizar] 
          
         Digite 'fácil', 'médio' ou 'difícil'`)
            
          if(nivelDificuldade==="fácil"){
            desabilitarTudo();
            setTimeout(desvirarCartaInicial, (numCartas*1000));
            boraDificultar=1;
          } else if(nivelDificuldade==="médio"){
            desabilitarTudo();
            setTimeout(desvirarCartaInicial, (numCartas*500));
            boraDificultar=1;
          } else if(nivelDificuldade==="difícil"){
            desabilitarTudo();
            setTimeout(desvirarCartaInicial, (numCartas*300));
            boraDificultar=1;
          } else {
            alert("Nível de dificuldade inválido")
            boraDificultar=0;
          }
        }while (boraDificultar!==1);
            }
            else{
            numCartas= prompt("Olá, vamos jogar um jogo! 😁 \nDigite um número par entre 4 e 14");
            }
    }
    }while  (boraJogar!=1)
  }

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
  
let adicionarCartas = document.querySelector('.cartas');

numCartasSelecionadas.sort(embaralhar); /*Embaralha o array*/
for(let i=0; i< numCartasSelecionadas.length; i++){
adicionarCartas.innerHTML += `<div class="carta virar naoEscolhida" onclick="virarCarta(this)"> 
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
cartaVirada = document.querySelectorAll(".naoEscolhida.virar  .frenteCarta");
  desabilitarTudo();
/*cartaVirada vai retornar uma nodeList*/

compararCartas(cartaVirada);

contadorCartasClicadas=0;
cartaVirada=[];
} 
}

function desvirarCarta(primeiraCarta, segundaCarta){
 if(primeiraCarta.classList.value === segundaCarta.classList.value){
  primeiraCarta.classList.remove("virar");
  primeiraCarta.classList.remove("parErrado");
  segundaCarta.classList.remove("virar");
  segundaCarta.classList.remove("parErrado");
  habilitarTudo();
 } else{
  alert("BUG! TÁ PEGANDO CARTA COM PAR CERTO!")
 }
  contadorJogadas++;

  finalizarJogo(contadorAcerto, contadorJogadas)
} 

/*Código que permite que as cartas iniciem desviradas*/
function desvirarCartaInicial(){
  const desvirarCarta = document.querySelectorAll(".carta.virar");

  for (let i=0; i<desvirarCarta.length; i++){
  desvirarCarta[i].classList.remove("virar");
   }
  habilitarTudo(); /*Permite que as cartas possam ser habilitadas para virar*/ 
   codigoPararCronometro = setInterval(cronometro, 1000)
  }

function compararCartas(cartaVirada){

 if (cartaVirada[0].classList.value==cartaVirada[1].classList.value){
primeiraCarta=cartaVirada[0].parentNode
segundaCarta=cartaVirada[1].parentNode

primeiraCarta.classList.add("parCorreto");
primeiraCarta.classList.remove("naoEscolhida");
segundaCarta.classList.add("parCorreto");
segundaCarta.classList.remove("naoEscolhida");

contadorAcerto++;
contadorJogadas++;
habilitarTudo();

setTimeout(function(){finalizarJogo(contadorAcerto, contadorJogadas)}, 500) 
 } 
 else {
  primeiraCarta=cartaVirada[0].parentNode
  segundaCarta=cartaVirada[1].parentNode
  primeiraCarta.classList.add("parErrado");
  segundaCarta.classList.add("parErrado");
  cartaVirada.length=0;

setTimeout (function(){desvirarCarta(primeiraCarta, segundaCarta)}, 1000);
 }
}

/*Código que pediram pra eu colocar*/
function embaralhar() { 
	return Math.random() - 0.5; 
}

function finalizarJogo(contadorAcerto, contadorJogadas){
  if (contadorAcerto===(numCartas/2)){
    contadorJogadas=2*contadorJogadas;
    clearInterval(codigoPararCronometro)
do{
    const parada = prompt(`Parabéns! Você encerrou o jogo em ${tempoPartida} segundos e com ${contadorJogadas} jogadas! 

    Deseja jogar novamente? 
  
    Digite 'sim' ou 'não'`)
   
    if(parada==="sim"){
    tempoPartida=0;
    limparJogo();
    iniciarJogo();
    boraParar=1
  } else if (parada==="não" || parada===null){
   boraParar=1
  } else{
    alert(`Código inválido`)
  }
} while (boraParar!=1)
}
}

function cronometro( ){
  tempoPartida++
  
  const cronometro = document.querySelector(".cronometro")
  cronometro.innerHTML = `Tempo: ${tempoPartida} segundos `;
}

function limparJogo(){
  let limparCartas = document.querySelector('.cartas');
  limparCartas.innerHTML="";
  contadorJogadas=0;
  contadorAcerto =0;
  tempoPartida =0;
  numCartas=0; 
  numCartasSelecionadas=[];
}

function habilitarTudo(){
  let habilitarTudo = document.querySelectorAll(".carta.naoEscolhida");
  for (let i=0; i<habilitarTudo.length; i++){
    habilitarTudo[i].setAttribute("onclick","virarCarta(this)" )
  }
}

function desabilitarTudo(){
 let desabilitarTudo = document.querySelectorAll(".carta.naoEscolhida")
for (let i=0; i<desabilitarTudo.length; i++){
desabilitarTudo[i].removeAttribute("onclick");
}
}