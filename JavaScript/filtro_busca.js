let prompt = require("prompt-sync")();

let user = [
  { id: "1", nome: "Chaves", idade: 30, status: true },
  { id: "2", nome: "Quico", idade: 20, status: true },
  { id: "3", nome: "Seu Madruga", idade: 19, status: true },
  { id: "4", nome: "Chiquinha", idade: 21, status: true },
  { id: "5", nome: "Nhonho", idade: 18, status: true },
  { id: "6", nome: "Bruxa do 71", idade: 10, status: true },
  { id: "7", nome: "Pópis", idade: 30, status: true },
];

main();

function main() {
  console.clear();
  let opcao;
  do {
    console.log("== MENU PRINCIPAL ==");
    console.log("1. Listar todos");
    console.log("2. Buscar por nome");
    console.log("0. Sair");
    opcao = parseInt(prompt("Escolha a opção: "));

    switch (opcao) {
      case 1:
        listagem();
        break;
      case 2:
        busca();
        break;
      case 0:
        console.log("Encerrando...");
        break;
      default:
        console.log("Opção invalida!");
        return;
    }
  } while (opcao > 0);
}

function listagem() {
  let opcao;

  console.clear();
  if (user.length === 0) {
    console.log("Nenhum usuário cadastrado.");
  } else {
    console.log("1. Ordem Crescente");
    console.log("2. Ordem Decrescente");
    opcao = parseInt(prompt("Escolha a opção: "));

    switch (opcao) {
      case 1:
        for (let i = 0; i < user.length; i++) {
          let statusTexto;
          if (user[i].status) {
            statusTexto = "ATIVO";
          } else {
            statusTexto = "DESATIVADO";
          }
          console.log(
            `== ID ${user[i].id} ==\nUsuário: ${user[i].nome}\nIdade: ${user[i].idade}\nStatus: ${statusTexto}\n`
          );
        }
        break;

      case 2:
        for (let i = user.length - 1; i >= 0; i--) {
          let statusTexto;

          if (user[i].status) {
            statusTexto = "ATIVO";
          } else {
            statusTexto = "DESATIVADO";
          }
          console.log(
            `== ID ${user[i].id} ==\nUsuário: ${user[i].nome}\nIdade: ${user[i].idade}\nStatus: ${statusTexto}\n`
          );
        }
        break;
    }
    prompt("Aperte ENTER para voltar...");
    main();
  }
}

function busca() {
  console.clear();

  let buscaNome = prompt("Qual usuário quer encontrar: ");
  buscaNome = buscaNome.toLowerCase().replaceAll("ó", "o");
  let usuariosEncontrado = [];

  for (let i = 0; i < user.length; i++) {
    let aux = user[i].nome;
    aux = aux.toLowerCase();
    aux = aux.replaceAll("ó", "o");

    if (aux.includes(buscaNome)) {
      usuariosEncontrado.push(user[i]);
    }
  }
  if (usuariosEncontrado.length != 0) {
    for (let i = 0; i < usuariosEncontrado.length; i++) {
      ativo();
      console.log(
        `\n== Usuário encontrado! ==\nUsuário: ${usuariosEncontrado[i].nome} | ID: ${usuariosEncontrado[i].id} | Status: ${statusTexto}`
      );
    }
  } else {
    console.log("Usuário não encontrado");
    setTimeout(() => {
      main();
    }, 1500);
  }
  prompt("Aperte ENTER para retornar...");
  main();
}

function ativo() {
  let statusTexto;

  if (usuariosEncontrado[i].status) {
    statusTexto = "ATIVO";
  } else {
    statusTexto = "DESATIVADO";
  }
}
