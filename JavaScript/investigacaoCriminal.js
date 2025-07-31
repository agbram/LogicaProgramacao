let prompt = require("prompt-sync")();

let pontos = 0;

console.log("=== INVESTIGAÇÃO CRIMINAL ===\n")

let telefonema;
console.log("Telefonou para vítima?\n1. (SIM)\n2. (NÃO")
telefonema = parseInt(prompt("Escolha a opção: "))

if(telefonema== 1){
    pontos++;
} else if(telefonema == 2){
    pontos = pontos;
}

let lugar;
console.log("\nEsteve no local da vítima?\n1. (SIM)\n2. (NÃO")
lugar = parseInt(prompt("Escolha a opção: "))

if(lugar == 1){
    pontos++;
} else if(lugar == 2){
    pontos = pontos;
}

let moraPerto;

console.log("\nMora perto da vítima?\n1. (SIM)\n2. (NÃO")
moraPerto = parseInt(prompt("Escolha a opção: "))

if(moraPerto == 1){
    pontos++;
} else if(moraPerto == 2){
    pontos = pontos;
}

let dever;

console.log("\nDevia para a vítima?\n1. (SIM)\n2. (NÃO")
dever = parseInt(prompt("Escolha a opção: "))

if(dever == 1){
    pontos++;
} else if(dever == 2){
    pontos = pontos;
}

let trabalho;

console.log("\nJá trabalhou com a vítima?\n1. (SIM)\n2. (NÃO")
trabalho = parseInt(prompt("Escolha a opção: "))

console.log("\n")

if(trabalho == 1){
    pontos++;
} else if(trabalho == 2){
    pontos = pontos;
}

if(pontos == 2){
    console.log("Você é suspeito")
}

else if(pontos == 3 || pontos == 4){
    console.log("Você é cúmplice")
}

else if(pontos == 5){
    console.log("Você é um ASSASSINO!!")
}
else{
    console.log("Você é inocente")
}
