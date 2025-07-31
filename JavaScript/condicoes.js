const { invalid } = require("moment/moment");

let prompt = require("prompt-sync")();

function limpaTela() {
    console.clear();
}

function ValidaIdade(){
    limpaTela();

let idade = parseInt(prompt("Informe sua idade: "))

if (idade >= 18){
    console.log("Você é maior de idade")
}
else{
    console.log("Você é menor de idade!")
}
return;
}
function senhaSistema(){
    limpaTela();
let senha;
let confirma = "12345"
do{
senha = prompt("Digite a senha do sistema: ")
if(senha == confirma){
    console.log("Acesso permitido! Bem vindo!")
} else{
    console.log("Acesso negado!")
}
} while(senha !== confirma)

return

/*  Crie um sistema que calcule o valor de venda de peixes de acordo com os kilos
    Cada kilo de peixe custa R$ 50,00
 
    Se, por acaso, houver mais do que 100 kilos de peixe, o kilo passa a custar R$ 55,90
 
    Mostre o valor final da venda
*/
}
function lojinhaDePeixe(){
    limpaTela();
console.log("== Vendas de peixe ==")

let KiloPeixe = prompt("Digite a quantidade de kilos de peixe que vai querer comprar: ")
let valor1 = 50
let valor2 = 55.9
let resultadofinalp1;
let resultadofinalp2;

if(KiloPeixe > 100){
    resultadofinalp2 = KiloPeixe * valor2
    console.log("Preço total: R$ "+ resultadofinalp2)
}else{
    resultadofinalp1 = KiloPeixe * valor1
    console.log("Preço total: R$ "+ resultadofinalp1)
}
return
}
function positivoNegativo(){
limpaTela();
    let numero = parseFloat(prompt("Informe um número: "));

    if(numero < 0){
        console.log("O número " + numero + " é negativo");
    }else{
        console.log("O número " + numero + " é positivo");
    }
    return
}
function CreditoDebito(){
    limpaTela();
let valor = parseFloat(prompt("Valor da compra: "))
console.log("1. Crédito\n2. Débito")
let opcao = prompt("Escolha a opcão: ");
opcao = parseInt(opcao);

switch(opcao){
    case 1: let credito = (valor + (valor * 0.05));
    console.log("O valor no crédito ficará em R$" + credito)
     break;
    case 2: let debito = (valor - (valor * 0.10));
    console.log("O valor no crédito ficará em R$" + debito)
    break;
    default: console.log("Encerrando...")
}
return
}
function validarCPF(){
    limpaTela();
    let cpf = prompt("Informe o CPF sem formatação: ")

    if(cpf.length < 11 || cpf.length > 11){
        console.log("CPF Inválido. Deve conter 11 números!")
    }
    else{
        console.log("CPF válido. Obrigado!")
    }
    return
}
function somaAcrescimo(){
    limpaTela();
    let num1 = parseFloat(prompt("Informe o 1° número:"))
    let num2 = parseFloat(prompt("Informe o 2° número:"))


    let resultado = num1 + num2

    if(resultado > 50){
        console.log(`O resultado entre ${num1} e ${num2} é: ${resultado + 10} (acréscimo de 10)`)
    }
    else{
        console.log(`O resultado entre ${num1} e ${num2} é: ${resultado - 20} (redução de 20)`)
    }
    return
}
function ordemCrescente(){
    limpaTela();
    let num1 = parseFloat(prompt("Informe o 1° número:"));
    let num2 = parseFloat(prompt("Informe o 2° número:"));

    if(num1 < num2){
        console.log(`Ordem Crescente: ${num1}, ${num2}`)
    } else if(num2 < num1){
        console.log(`Ordem Crescente: ${num2}, ${num1}`)
    }
    return
}

let opcao;
do{

console.log("\n=== MENU ATIVIDADES ===\n");
console.log("1. Atividade - Validar Idade")
console.log("2. Atividade - senha do sistema")
console.log("3. Atividade - Loja de Peixe")
console.log("4. Atividade - Identificar Positivo e Negativo")
console.log("5. Atividade - Crédito e Débito")
console.log("6. Atividade - Validar de CPF")
console.log("7. Atividade - Soma Acréscimo")
console.log("8. Atividade - Ordem Crescente")
console.log("0. Sair")
opcao = parseInt(prompt("Escolha opção: "))

switch(opcao){

    case 1: ValidaIdade(); break;
    case 2: senhaSistema(); break;
    case 3: lojinhaDePeixe(); break;
    case 4: positivoNegativo(); break;
    case 5: CreditoDebito(); break;
    case 6: validarCPF(); break;
    case 7: somaAcrescimo(); break;
    case 8: ordemCrescente(); break;
    default: console.log("Encerrando...")
}

} while(opcao !== 0);



