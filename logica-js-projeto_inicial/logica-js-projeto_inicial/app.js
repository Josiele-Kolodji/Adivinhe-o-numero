/*alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 4;
let numQualquer = prompt("Escolha um número entre 1 e 10");

if(numQualquer > numeroSecreto){
    alert(`O número secreto é menor que ${numQualquer}`);
}else if(numQualquer < numeroSecreto){
    alert(`O número secreto é maior que ${numQualquer}`);
}else {
        alert(`Isso aí, você descobriu! o número secreto é o ${numeroSecreto}`);
}

let senhaDoSistema = "senhaTeste!";

let senha = prompt("Digite a senha do sistema:");

if (senha == senhaDoSistema){
    alert("Acesso ao sistema garantido");
}else{
    alert("Senha Incorreta");
}

alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponível = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
let seuNome = prompt("Qual é o seu nome?");
nome = seuNome;

if(idade >= 18) {
    alert("Pode tirar a habilitação!")
}else{
    alert("Você ainda é menor de idade, portanto não pode tirar a habilitação!");
}

alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 4;
let numQualquer;
let tentativas = 1;

while (numQualquer != numeroSecreto) {
    numQualquer = prompt("Escolha um número entre 1 e 10");

    if(numQualquer == numeroSecreto){
        alert(`Isso aí, você descobriu! o número secreto é o ${numeroSecreto} com ${tentativas} tentativas`);
    }else {
        if(numQualquer > numeroSecreto){
            alert(`O número secreto é menor que ${numQualquer}`);
        } else {
            alert(`O número secreto é maior que ${numQualquer}`);
        }
        tentativas++;
    }
}


let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = 0;

while(contador < qtdNumeros){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador++;
}

let media = soma / qtdNumeros;

alert(`A média aritmética é ${media}`);

alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let numQualquer;
let tentativas = 1;

while (numQualquer != numeroSecreto) {
    numQualquer = prompt("Escolha um número entre 1 e 100");

    if(numQualquer == numeroSecreto){
       break;
    }else {
        if(numQualquer > numeroSecreto){
            alert(`O número secreto é menor que ${numQualquer}`);
        } else {
            alert(`O número secreto é maior que ${numQualquer}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí, você descobriu! o número secreto é o ${numeroSecreto} com ${tentativas} ${palavraTentativa}`); 

alert("Boas vindas ao jogo do número secreto!");
let numMax = 500;
let numeroSecreto = parseInt(Math.random() * numMax + 1);
let numQualquer;
let tentativas = 1;


while (numQualquer != numeroSecreto) {
    numQualquer = prompt(`Escolha um número entre 1 e ${numMax}`);

    if(numQualquer == numeroSecreto){
       break;
    }else {
        if(numQualquer > numeroSecreto){
            alert(`O número secreto é menor que ${numQualquer}`);
        } else {
            alert(`O número secreto é maior que ${numQualquer}`);
        }
        tentativas++;
    }
}

alert(`Isso aí, você descobriu! o número secreto é o ${numeroSecreto} com ${tentativas}`);*/
