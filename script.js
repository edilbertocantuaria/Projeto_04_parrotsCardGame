let boraJogar=0;
function inciarJogo(){
do{
let numCartas= prompt("Olá, vamos jogar um jogo! 😁 \nDigite um número par entre 4 e 14");

/*Esse if foi colocado exatamente para sair quando o usuário clicar em "cancelar" no console*/
if (numCartas===null ){
   boraJogar=1
} 
else {
numCartas = Number(numCartas);
const numImpar = numCartas%2;

if ((numCartas>=4 &&numCartas<=14) && (numImpar==0)){
    boraJogar=1;
}
} 
}while  (boraJogar!=1)
}
