let prompt = require("prompt-sync")();

function exemploPagamento(){

    let pagamento = prompt("Selecione uma opcao: crédito, débito, pix ou dinheiro: ")

    if(pagamento == "credito"){
        console.log("Você selecionou crédito!")
    } else if( pagamento == "debito"){
        console.log("Você selecionou dédito!")
    } else if(pagamento == "pix"){
        console.log("Você selecionou pix!")
    } else if(pagamento == "dinheiro"){
        console.log("Você selecionou dinheiro!")
    } else {
       console.log("FORMA INVÁLIDA")
    }
}

//exemploPagamento();

/*

    Pergunte a idade de uma pessoa.
    Se ela tiver mais de 18 anos mostre "Você já pode tirar a CNH"
    Com menos de 18 anos mostre "Você ainda não tem idade para tirar CNH"
    Mas caso a pessoa tenha mais de 65 anos, mostre "Teste especial para renovar a CNH"
    Se a pessoa tiver mais de 120 anos, mostre "Idade inválida..."

*/

function idade(){

    let idade = prompt("Informe sua idade: ")

    if(idade >= 18 && idade <= 65){
        console.log("Você pode tirar CNH!")
    }else if( idade < 18){
        console.log("Você não pode tirar CNH!")
    }else if(idade > 65 && idade < 120){
        console.log("Teste especial para renovar CNH!")
    }else{
        console.log("Idade inválida")
    }
}

//idade();

function login(){

    let usuario = prompt("Digite seu usuário: ");
    let senha = prompt("Digite a senha: ")

    if(usuario == "admin" &&  senha == "123"){
        console.log("Acesso concedido!")
    } else{
        console.log("Usuário ou senha incorretos!")
    }
}

//login();

function exemploResposta(){

console.log("Deseja cadastrar o débito automático?\n1. (SIM)\n0. (NAO) ")
let resposta = parseInt(prompt("Escolha a opção: "))

    if(resposta == 1){
        console.log("Débito cadastrado com sucesso")
    }
    else if(resposta == 0){
        console.log("Não será cadastrado")
    }
    else{
        console.log("Opção Inválida!")
    }
}

//exemploResposta();

function atividadeFutebol(){

    let time1 = prompt("Digite o nome do primeiro time: ");
    let time2 = prompt("Digite o nome do segundo time: ");

    let golT1 = parseInt(prompt(`${time1} insira a quantidade de gols: `))
    let golT2 = parseInt(prompt(`${time2} insira a quantidade de gols: `))

    if(golT1 > golT2){
        console.log(`O vencedor foi: ${time1} por ${golT1} x ${golT2}`)
    } else if(golT2 == golT1){
        console.log("O jogo foi empatado")
    } else{
        console.log(`O vencedor foi: ${time2} por ${golT2} x ${golT1}`)
    }
}
atividadeFutebol();

let opcao;

