let prompt = require("prompt-sync")();

//main()

function main(){
    
    console.clear();
    console.log("Vamos inciar seu cadastro!")
    validacaoNome();
    validacaoIdade();
    validaCPF();
    validaEmail()
    verificaSenha();
    

    console.log("Cadastrado com sucesso!")
}

function validacaoNome(){
     let nome = prompt("Digite seu nome: ");
    
    if(nome.length  < 3){
        console.log("Nome inválido")
        validacaoNome();
        return
    }
}

function validacaoIdade(){
    let idade = parseInt(prompt(`Digite sua idade: `))

    if(idade < 18 ){
        console.log("Idade inválida")
        validacaoIdade()
        return;
    } else if(idade > 100){
        console.log("Idade inválida")
        validacaoIdade()
        return;
    }
}

function validaCPF(){
    let cpf = prompt(`Digite seu CPF(apenas digitos): `)
    cpf = cpf.replaceAll(".", "");
    cpf = cpf.replaceAll("-","");

    if(cpf.length > 11 || cpf.length < 11){
        console.log("CPF inválido!")
        validaCPF()
        return
    }
}

function validaEmail(){

    let email = prompt(`Digte seu email: `)

    if(email.length < 10)
    {
        console.log("Email inválido!")
        validaEmail()
        return;
    }
    if(email.includes("@")== false){
        console.log("Email inválido...Falta '@' no email")
        validaEmail()
        return;
    }
    if(email.includes(".")==false){
        console.log("Email inválido...Falta '.' no email")
        validaEmail()
        return;
    }
}
verificaSenha();
function verificaSenha(){
    let senha = prompt("Digite a senha(minimo de 6 digitos): ")
    let repitaSenha = prompt("Digite a senha novamente: ")
    
    if(senha.length < 6 ){
        console.log("A senha tem que ter no mínimo 6 digitos!")
    }
    if(senha != repitaSenha) {
        console.log("As senhas não coincidem")
    }
    
}
