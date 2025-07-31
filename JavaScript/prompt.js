const prompt = require("prompt-sync")();
const moment = require('moment');

let nomeCompleto;
let anoNasc;
let idadeFutura;
let idade;
let soma2numero;
let n1;
let n2;
let metros;
let km;
let nota1;
let nota2;
let media;
let valorTabuada;

function limpaTela() {
    console.clear();
}

function nome_completo() {
    limpaTela();
    const nome = prompt("Digite seu nome: ");
    const sobrenome = prompt("Digite seu sobrenome: ");
    nomeCompleto = `${nome} ${sobrenome}`;
}

function idade_user() {
    anoNasc = parseInt(prompt("Informe seu ano de nascimento: "));
    idade = 2025 - anoNasc;
    idadeFutura = idade + 5;
}

function soma() {
    limpaTela();
    n1 = parseFloat(prompt("Informe o primeiro número para somar: "));
    n2 = parseFloat(prompt("Informe o segundo número para somar: "));
    soma2numero = n1 + n2;
    console.log(`O resultado de ${n1} + ${n2} é ${soma2numero}`);
}

function conversaoKm() {
    limpaTela();
    metros = parseFloat(prompt("Informe o valor em metros: "));
    km = metros / 1000;
    console.log(`O valor de ${metros}m em km é ${km}`);
}

function mediaAlunos() { //calcula a media do aluno cadastradp
    limpaTela();
    do {
        nota1 = parseFloat(prompt(`Informe a nota da primeira prova de ${nomeCompleto}: `));
        nota2 = parseFloat(prompt(`Informe a nota da segunda prova de ${nomeCompleto}: `));

        if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
            console.log("Notas inválidas! Digite valores entre 0 e 10.");
        } else {
            media = (nota1 + nota2) / 2;
            console.log(`A média de ${nomeCompleto} é ${media.toFixed(1)}`); 
        }
    } while (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10);
}

function tabuada() {
    limpaTela();
    valorTabuada = parseInt(prompt("Informe o valor que deseja ver a tabuada: "));
    console.log(`\n--- Tabuada do ${valorTabuada} ---`);
    for (let i = 0; i <= 10; i++) {
        console.log(`${valorTabuada} x ${i} = ${valorTabuada * i}`); //mostrar o resultado do calculo da tabuada completa
    }
}

function listagem() {
    limpaTela();
    console.log("\n--- Listagem de Usuário ---");
    console.log(`Nome: ${nomeCompleto}`);
    console.log(`Idade: ${idade}`);
    console.log(`Daqui 5 anos você terá: ${idadeFutura}`);
}

function cadastro() {
    limpaTela();
    nome_completo();
    idade_user();
    console.log(`Seja bem-vindo(a), ${nomeCompleto}!`);
    console.log("Seu cadastro foi realizado com sucesso.");
}

function mostrarDataPadrao() {
    limpaTela();
    console.log(moment().format('LLLL'));
}

function mostrarDataAntiga() {
    limpaTela();
    console.log(moment().subtract(7, 'days').calendar());
}

function mostrarDataBrasil() {
    limpaTela();
    moment.locale('pt-br');
    console.log(moment().format('LL'));
}

function mostrarMesesAtras() {
    limpaTela();
    moment.locale('pt-br');
    console.log(moment().subtract(2, 'months').calendar());
}

function data() {
    limpaTela();
    let opcaoData;

    do {
        console.log("\n--- Menu de Datas ---");
        console.log("1. Data Padrão");
        console.log("2. Data da Semana Passada");
        console.log("3. Data no Brasil");
        console.log("4. 2 Meses Atrás no Brasil");
        console.log("0. Voltar");

        opcaoData = parseInt(prompt("Escolha uma opção: "));

        switch (opcaoData) {
            case 1: mostrarDataPadrao(); break;
            case 2: mostrarDataAntiga(); break;
            case 3: mostrarDataBrasil(); break;
            case 4: mostrarMesesAtras(); break;
            case 0: break;
            default: console.log("Opção inválida! Tente novamente.");
        }
    } while (opcaoData !== 0);
}

function atividade() {
    limpaTela();
    let opcaoAtividade;

    do {
        console.log("\n--- Menu de Atividades ---");
        console.log("1. Soma");
        console.log("2. Conversão (m para km)");
        console.log("3. Média do aluno");
        console.log("4. Tabuada");
        console.log("5. Datas");
        console.log("0. Voltar");

        opcaoAtividade = parseInt(prompt("Escolha uma opção: "));

        switch (opcaoAtividade) {
            case 1: soma(); break;
            case 2: conversaoKm(); break;
            case 3: mediaAlunos(); break;
            case 4: tabuada(); break;
            case 5: data(); break;
            case 0: break;
            default: console.log("Opção inválida! Tente novamente.");
        }
    } while (opcaoAtividade !== 0);
}

// Menu principal
let opcao;
do {
    console.log("\n=== Menu Principal ===");
    console.log("1. Cadastrar");
    console.log("2. Listar dados");
    console.log("3. Atividades");
    console.log("0. Sair");

    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1: cadastro(); break;
        case 2: listagem(); break;
        case 3: atividade(); break;
        case 0: console.log("Encerrando o programa. Até mais!"); break;
        default: console.log("Opção inválida! Tente novamente.");
    }
} while (opcao !== 0);
