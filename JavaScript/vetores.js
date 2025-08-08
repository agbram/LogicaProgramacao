let prompt = require("prompt-sync")();

let user = [
    { id: "1", nome: "Rafael", idade: 30, status: true},
    { id: "2", nome: "Gustavo", idade: 20, status: true},
    { id: "3", nome: "Eduardo", idade: 19, status: true},
    { id: "4", nome: "Jean", idade: 21, status: true},
    { id: "5", nome: "Murilo", idade: 18, status: true},
    { id: "6", nome: "Bernardo", idade: 10, status: true}

    
];

let indiceBusca = 0;

main();

function main() {
    console.clear();
    let opcao;
    do {
        console.log("1. Cadastrar");
        console.log("2. Listar");
        console.log("3. Buscar");
        console.log("0. Sair");
        opcao = parseInt(prompt("Escolha a opção: "));

        switch (opcao) {
            case 1: cadastro(); break;
            case 2: listagem(); break;
            case 3: busca(); break;
            case 0: console.log("Encerrando..."); break;
            default:
                console.log("Opção Inválida!");
                prompt("Aperte ENTER para voltar...");
                main();
        }
    } while (opcao !== 0);
}

function cadastro() {
    console.clear();
    let nome = prompt("Digite seu nome: ");
    let idade = prompt("Digite a idade: ")
    let id = user.length + 1;

    user.push({nome, idade, id, status: true});
    console.log("Usuário cadastrado...");
    prompt("Aperte ENTER para retornar...");
    main();
}

function listagem() {
    console.clear();
    if (user.length === 0) {
        console.log("Nenhum usuário cadastrado.");
    } else {
        for (let i = 0; i < user.length; i++) {
            let statusTexto;
                if(user[i].status){
                    statusTexto = "ATIVO"
                } else {
                    statusTexto = "DESATIVADO"
                }
            console.log(`== ID ${user[i].id} ==\nUsuário: ${user[i].nome}\nIdade: ${user[i].idade}\nStatus: ${statusTexto}\n`);
        }
    }
    prompt("Aperte ENTER para voltar...");
    main();
}

function busca() {
    console.clear();
    let posicao = parseInt(prompt("Qual ID quer encontrar: "));
    
    if (posicao >= 1 && posicao <= user.length) {
        indiceBusca = posicao - 1;
        console.log(`O usuário ${posicao} é ${user[indiceBusca].nome}`);
        console.log("");
        alterar();
    } else {
        console.log("ID inválido!");
        prompt("Aperte ENTER para retornar...");
        main();
    }
}

function alterar(posicao) {


    console.log("Deseja alterar esse usuário?");
    console.log("1. Alterar nome");
    console.log("2. Desativar usuário");
    console.log("3. Retornar ao menu");
    let opcao = parseInt(prompt("Escolha a opção: "));

    switch (opcao) {
        case 1:
            let novoNome = prompt("Digite o novo nome: ");
            user[indiceBusca].nome = novoNome;
            console.log("Usuário atualizado!");
            prompt("Aperte ENTER para voltar ao menu...");
            main();
            break;

        case 2:
            desativarUser();
            break;

        case 3:
            console.log("Retornando...");
            main();
            break;

        default:
            console.log("Opção inválida!");
            alterar(); // chama de novo até digitar corretamente
            break;
    }
}

function desativarUser() {
    console.log("Desativar " + user[indiceBusca].nome + "?");
    console.log("1. SIM\n2. NÃO");
    let opcao = parseInt(prompt("Escolha a opção: "));

    if (opcao === 1) {
        user[indiceBusca].status = false;
        console.log("Desativando...");

        setTimeout(() => {
           main(); 
        }, 2000);
    } else {
        console.log("Usuário não foi desativado.");
    }
    prompt("Aperte ENTER para retornar ao menu...");
    main();
}
