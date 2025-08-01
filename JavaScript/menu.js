let prompt = require("prompt-sync")();

let ids = [];
let nomesCompletos = [];
let idades = [];
let favoritos = [];

let proximoId = 1;

function limpaTela() {
    console.clear();
}

function cadastro() {
    limpaTela();
    console.log(`=== Cadastrando o ID ${proximoId} ===`);
    let nomeN = prompt("Insira seu primeiro nome: ");
    let nomeS = prompt("Insira seu sobrenome: ");
    let idade = parseInt(prompt("Insira a idade: "));
    let favorito = prompt("Insira seu animal favorito: ");
    let nomeCompleto = nomeN + " " + nomeS;

    ids.push(proximoId);
    nomesCompletos.push(nomeCompleto);
    idades.push(idade);
    favoritos.push(favorito);

    console.log(`\n✅ Cadastro de ${nomeCompleto} realizado com sucesso!\n`);
    prompt("Pressione ENTER para continuar...");
    proximoId++;
}

function listaCadastro() {
    limpaTela();
    console.log("== LISTAGEM DE USUÁRIOS ==");
    if (ids.length === 0) {
        console.log("Nenhum usuário cadastrado.");
    } else {
        for (let i = 0; i < ids.length; i++) {
            console.log(`== ID ${ids[i]} ==`);
            console.log("Nome: " + nomesCompletos[i]);
            console.log("Idade: " + idades[i]);
            console.log("Animal favorito: " + favoritos[i]);
            console.log("------------------------");
        }
    }
    prompt("\nPressione ENTER para retornar ao menu...");
}

function menu() {
    let opcao;

    do {
        limpaTela();
        console.log("== SISTEMA DE USUÁRIOS ==");
        console.log("1. Cadastrar");
        console.log("2. Listar");
        console.log("0. Sair");
        opcao = parseInt(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                cadastro();
                break;
            case 2:
                listaCadastro();
                break;
            case 0:
                console.log("Encerrando...");
                break;
            default:
                console.log("Opção inválida!");
                prompt("Aguarde... pressione ENTER para voltar ao menu.");
        }
    } while (opcao !== 0);
}

menu();
