let prompt = require("prompt-sync")();

//vetores (ou arrays): guardar varios dados em uma so varivel;

let listaNomes = []

main();

function main(){
console.clear();
    let opcao;
do{
    console.log("1. Cadastrar")
    console.log("2. Listar")
    console.log("3. Buscar")
    console.log("0. Sair")
    opcao = parseInt(prompt("Escolha a opção: "))

    switch(opcao){
        case 1: cadastro(); break;
        case 2: listagem(); break;
        case 3: busca(); break;
        case 0: console.log("Encerrando...");return;
        default: console.log("Opção Invalida!");prompt("Aperte ENTER para voltar..."); main();
        
    }
}while(opcao >= 1);

}

function cadastro(){
    console.clear();

    let nome = prompt("Digite seu nome: ")
    listaNomes.push(nome);

}

function listagem(){

    for(let i = 0; i < listaNomes.length; i++){
        console.log("ID "+ (i + 1) + " - Usuário: " + listaNomes[i]);
    }
    prompt("Aperte ENTER para voltar...")
    main();

}
function busca(){
    console.clear();

        let posicao;
        posicao = (prompt("Deseja encontrar qual usuário: "))

        if(posicao > listaNomes.length + 1){
            console.log("Nenhum usuário cadastrado!")
            prompt("Aperte ENTER para retornar...");
            main();
        }
        else{
        console.log(`O usuário ${posicao} é ${listaNomes[posicao - 1]}`)
        prompt("Aperte ENTER para retornar...");
        main();
    }
}
