//Crie um array com dez números, calcule e mostre a quantidade de números negativos 
// e a soma dos números positivos desse array.

let numero = [-5,25,36,-74,0,69,24,-7,-14,36];
let qtdNumerosNegativos=0,somaNumerosPositivos=0;

for(let i=0;i<10;i++){
    if(numero[i] < 0){
        qtdNumerosNegativos++;
    }else{
        somaNumerosPositivos= somaNumerosPositivos + numero[i];
    }
}

console.log("Existiu "+qtdNumerosNegativos+" numeros negativos no vetor");
console.log("A soma dos numeros positivos é: "+somaNumerosPositivos);

