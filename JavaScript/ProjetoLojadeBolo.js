let prompt = require("prompt-sync")();

let usuarios = [
  { id: 1, nome: "admin", senha: "123", admin: true },
  { id: 2, nome: "usuarios1", idade: 30, senha: "321", status: false, admin: false},
  { id: 3, nome: "usuarios2", idade: 40, senha: "222", status: true, admin: false}
];

let bolos = [];

//cria uma variavel nula
let usuario = null;

function limpaTela() {
  console.clear();
}
main();
function main() {
  limpaTela();
  console.log("=== INÍCIO ===");
  console.log("\nBem-vindo ao Paraíso dos Bolos!\nAqui cada fatia conta uma história, e cada receita é feita com carinho.\nExplore nossos sabores, descubra novas delícias e sinta-se em casa — porque por aqui, o amor é sempre o ingrediente principal");
  console.log("\n1. LOGIN\n2. NOVO POR AQUI? (Cadastre-se)");
  let opcao = parseInt(prompt("Escolha a opção: "));

  switch (opcao) {
    case 1:
      console.log("Bem vindo de volta! Vamos para o login...");
      setTimeout(() => {
        paginaLogin();
      }, 1500);  
      break;

    case 2:
      console.log("Certo...Vamos começar com seu cadastro!");
      setTimeout(() => {
        cadastroUsuario();
      }, 1500);   
      break;

    default:
      console.log("Opção inválida!");
      return;
  }
}

function paginaLogin() {
  limpaTela();
  console.log("\n===  SISTEMA DE LOGIN ===");
  let nome = prompt("Digite o nome: ");
  let senha = prompt("Digite a senha: ");
  autenticar(nome, senha);

  if (usuario.admin == true) {
    menuAdmin();
  } else {
    //((Jean)-> menuUsuario)
  }
}
//autentica o usuario
function autenticar(nome, senha) {
  for (let i = 0; i < usuarios.length; i++) {
    if (nome == usuarios[i].nome && senha == usuarios[i].senha) {
      usuario = usuarios[i];
      console.log(`Usuário [${usuario.nome}] autenticado com sucesso`);
    }
  }

  if (usuario == null) {
    console.log("Usário ou senha inválidos...");
    prompt("Aperte ENTER para retornar...");
    paginaLogin();
    return;
  }
}
//cadastra novos bolos
function cadastroBolo() {
  limpaTela();

  let idBolo = bolos.length + 1;
  console.log(`=== Cadastrando o ID ${idBolo} ===`);

  let nomeBolo = prompt("Insira o nome do bolo: ");
  for (let i = 0; i < bolos.length; i++) {
    if (bolos[i].nome.toLowerCase() === nomeBolo.toLowerCase()) {
      console.log("Bolo já cadastrado!");
      prompt("Aperte ENTER para tentar novamente...");
      cadastroBolo()
    }
}
  let precoBolo = parseFloat(prompt(`Insira o preço do ${nomeBolo}: `));
  let qtdEstoque = parseInt(prompt(`Quantos ${nomeBolo} tem no estoque: `));

  let estoque = qtdEstoque > 0;


  bolos.push({
    id: idBolo,
    nome: nomeBolo,
    preco: precoBolo,
    qtd: qtdEstoque,
    estoque: estoque
  });

  console.log(`✅ Cadastro de ${nomeBolo} realizado com sucesso!\n`);
  prompt("Pressione ENTER para continuar...");
}

//lista os bolos cadastrados
function listaCadastro() {
  limpaTela();

  console.log("== LISTAGEM DE BOLOS ==");
  if (bolos.length === 0) {
    console.log("Nenhum bolo cadastrado.");
  } else {
    for (let i = 0; i < bolos.length; i++) {
      let ativo = bolos[i].estoque ? "EM ESTOQUE" : "SEM ESTOQUE";

      console.log(`\n== ID ${bolos[i].idBolo} ==`);
      console.log("Nome: " + bolos[i].nome);
      console.log("Preço: R$" + bolos[i].preco.toFixed(2));
      console.log(`Status do estoque: ${ativo}`);
      console.log(`Quantidade no estoque: ${bolos[i].qtd}`);
      console.log("------------------------");
    }
  }
  prompt("\nPressione ENTER para retornar ao menu...");
}
//edita os bolos cadastrados
function editaCadastroBolo() {
  limpaTela();

  let buscaNome = prompt("Qual bolo quer encontrar: ");
  buscaNome = buscaNome.toLowerCase();
  let bolosEncontrados = [];

  for (let i = 0; i < bolos.length; i++) {
    let aux = bolos[i].nome;
    aux = aux.toLowerCase();

    if (aux.includes(buscaNome)) {
      bolosEncontrados.push(bolos[i]);
    }
  }
  if (bolosEncontrados.length != 0) {
    for (let i = 0; i < bolosEncontrados.length; i++) {
      let ativo = bolos[i].estoque ? "EM ESTOQUE" : "SEM ESTOQUE";
      console.log(
        `\n== Bolo encontrado! ==\nID: ${bolosEncontrados[i].idBolo}\nNome: ${bolosEncontrados[i].nome}\nNo estoque: ${ativo}\nQuantidade: ${bolosEncontrados[i].qtd}\nPreco: ${bolosEncontrados[i].preco}`
      );
      alterar(bolos.indexOf(bolosEncontrados[i]));
    }
  } else {
    console.log("Bolo não encontrado ou não cadastrado");
    setTimeout(() => {
      menuAdmin();
    }, 1500);
  }
  prompt("Aperte ENTER para retornar...");
  menuAdmin();
}
//soma todos os bolos cadastrados ou um bolo específico
function somarEstoque() {
  limpaTela();
  let somaItens = 0;
  let valorTotal = 0;

  for (let i = 0; i < bolos.length; i++) {
    somaItens += bolos[i].qtd;
    valorTotal += bolos[i].qtd * bolos[i].preco;
  }

  console.log(`📦 Total de itens no estoque: ${somaItens}`);
  console.log(`💰 Valor total do estoque: R$ ${valorTotal.toFixed(2)}`);

  console.log(
    "\nDeseja ver o valor de estoque de apenas um item específico?\n1.SIM\n2.NÃO"
  );
  let opcaoSoma = parseInt(prompt("Escolha a opção:"));

  if (opcaoSoma === 1) {
    let buscaNome = prompt("Qual bolo quer somar: ").toLowerCase();
    let bolosEncontrados = [];

    for (let i = 0; i < bolos.length; i++) {
      let aux = bolos[i].nome.toLowerCase();
      if (aux.includes(buscaNome)) {
        bolosEncontrados.push(bolos[i]);
      }
    }

    if (bolosEncontrados.length > 0) {
      for (let i = 0; i < bolosEncontrados.length; i++) {
        let valorUnico = bolosEncontrados[i].qtd * bolosEncontrados[i].preco;
        console.log(`\n== Bolo encontrado ==`);
        console.log(`ID: ${bolosEncontrados[i].idBolo}`);
        console.log(`Nome: ${bolosEncontrados[i].nome}`);
        console.log(`Quantidade: ${bolosEncontrados[i].qtd}`);
        console.log(
          `Preço unitário: R$ ${bolosEncontrados[i].preco.toFixed(2)}`
        );
        console.log(`Valor total no estoque: R$ ${valorUnico.toFixed(2)}`);
        console.log("------------------------");
      }
    } else {
      console.log("Nenhum bolo encontrado com esse nome.");
    }
  }

  prompt("Pressione ENTER para voltar ao menu...");
}
//alterar as informacoes dos bolos (nome, preco, quantidade) utilzando as funcoes (alteraInfos, zeraEstoque)
function alterar(i) {
  console.log("\nDeseja alterar esse bolo?");
  console.log("1. Alterar informações");
  console.log("2. Dar baixa no estoque?");
  console.log("3. Retornar ao menu");
  let opcao = parseInt(prompt("Escolha a opção: "));

  switch (opcao) {
    case 1:
      alteraInfos(i);
      break;

    case 2:
      zeraEstoque(i);
      break;

    case 3:
      console.log("Retornando...");
      menuAdmin();
      break;

    default:
      console.log("Opção inválida!");
      alterar(i); // chama de novo até digitar corretamente
      break;
  }
}
function zeraEstoque(i) {
  console.log(
    "\nTem certeza que deseja zerar o estoque desse item (uma vez apagado não tem como recuperar)?\n1.SIM\n0.NAO"
  );
  let selecionarBaixa = parseInt(prompt("Escolha a opção: "));
  if (selecionarBaixa == 1) {
    bolos[i].qtd = 0;
    bolos[i].estoque = false;
    console.log("Estoque zerado!");
  }
  prompt("Aperte ENTER para retornar ao menu...");
  menuAdmin();
  return;
}
function alteraInfos(i) {
  limpaTela();
  console.log("1. Trocar nome");
  console.log("2. Alterar preço");
  console.log("3. Alterar quantidade no estoque");
  console.log("0. Retornar ao menu");
  let selecionar = parseInt(prompt("Escolha a opcao: "));

  switch (selecionar) {
    case 1:
      console.log(`Nome atual: ${bolos[i].nome}`);
      let novoNome = prompt("Digite o novo nome: ");
      bolos[i].nome = novoNome;
      console.log("Nome atualizado!");
      prompt("Aperte ENTER para voltar ao menu...");
      alteraInfos(i);
      break;

    case 2:
      console.log(`Preço atual: ${bolos[i].preco}`);
      let novoPreco = prompt("Digite o novo preco: ");
      bolos[i].preco = parseFloat(novoPreco);
      console.log("Preco atualizado!");
      prompt("Aperte ENTER para voltar ao menu...");
      alteraInfos(i);
      break;

    case 3:
      console.log(`Quantidade atual: [${bolos[i].qtd}]`);
      let novoQtd = parseInt(
        prompt(
          "Mude a quantidade do estoque(use '+' para adicionar/ use '-' para remover): "
        )
      );
      bolos[i].qtd += novoQtd;
      bolos[i].estoque = bolos[i].qtd > 0;
      console.log("Estoque atualizado!");
      prompt("Aperte ENTER para voltar ao menu...");
      alteraInfos(i);
      break;
  }
}
//lista os bolos que estao com estoque abaixo de 10 itens
function alertaEstoqueBaixo() {
  limpaTela();
  let estoqueBaixo;

  console.log("=== ALERTA DE ESTOQUE BAIXO ===");
  for (let i = 0; i < bolos.length; i++) {
    estoqueBaixo = bolos[i].qtd < 10;

    if (estoqueBaixo == false) {
      console.log("Nenhum bolo abaixo do estoque.");
    } else {
      console.log(`== ID ${bolos[i].idBolo} ==`);
      console.log("Nome: " + bolos[i].nome);
      console.log(`Quantidade no estoque: ${bolos[i].qtd}`);
      console.log("------------------------");
    }

    prompt("\nPressione ENTER para retornar ao menu...");
  }
}
//desativa usuários cadastrados
function desativarUsuario() {
  limpaTela();

  let buscaNome = prompt("Qual usuário quer desativar: ");
  buscaNome = buscaNome.toLowerCase();
  let usuariosEncontrado = [];

  for (let i = 0; i < usuarios.length; i++) {
    let aux = usuarios[i].nome;
    aux = aux.toLowerCase();

    if (aux.includes(buscaNome)) {
      usuariosEncontrado.push(usuarios[i]);
    }
  }
  if (usuariosEncontrado.length != 0) {
    for (let i = 0; i < usuariosEncontrado.length; i++) {
           let statusTexto = usuariosEncontrado[i].status ? "ATIVO" : "DESATIVADO";
      console.log(
        `\n== Usuário encontrado! ==\nID: ${usuariosEncontrado[i].id} | Usuário: ${usuariosEncontrado[i].nome} | Status: ${statusTexto}`
      );
      if(usuariosEncontrado[i].status == true){
      console.log(`Deseja desativar ${usuariosEncontrado[i].nome}?\n1.SIM\n2.NAO`);
      let escolhaDesativa = parseInt(prompt("Escolha a opcao: "));

      switch (escolhaDesativa) {
        case 1:
          usuariosEncontrado[i].status = false;
          console.log("Usuário desativado com sucesso!");
          break;

        case 2:
          console.log("Retornando ao menu...");
          setTimeout(() => {
            menuAdmin();
          }, 2000);
      }
    } else {
      console.log(`Deseja Ativar ${usuariosEncontrado[i].nome}?\n1.SIM\n2.NAO`);
      let escolhaAtiva = parseInt(prompt("Escolha a opcao: "));

      switch (escolhaAtiva) {
        case 1:
          usuariosEncontrado[i].status = true;
          console.log("Usuário ativado com sucesso!");
          break;

        case 2:
          console.log("Retornando ao menu...");
          setTimeout(() => {
            menuAdmin();
          }, 2000);
      }
    }
  }
 } else {
    console.log("Usuário não encontrado");
    setTimeout(() => {
      menuAdmin();
    }, 1500);
  }
  prompt("Aperte ENTER para retornar...");
  menuAdmin();
}
//cadastra novos usuarios utilizando as funcoes (validacaoNome, validacaoIdade, validaEmail, verifica senha)
function cadastroUsuario() {
  limpaTela();
  console.log("=== PAGINA DE CADASTRO ===\n")
  let nomeUsuario = validacaoNome();
  let idadeUsuario = validacaoIdade();
  let emailUsuario = validaEmail();
  let senhaUsuario = verificaSenha();

  let id = usuarios.length + 1;

  usuarios.push({id, nome: nomeUsuario, idade: idadeUsuario, email: emailUsuario, senha: senhaUsuario, status: true, admin: false});

  console.log("Cadastrado com sucesso!");
  prompt("Pressione ENTER para continuar...");
  paginaLogin();
}
function validacaoNome() {
  let nomeUsuario = prompt("Digite seu nome: ");
  if (nomeUsuario.length < 3) {
    console.log("Nome inválido");
    validacaoNome();
  }
  return nomeUsuario;
}
function validacaoIdade() {
  let idadeUsuario = parseInt(prompt(`Digite sua idade: `));

  if (idadeUsuario < 18) {
    console.log("Idade inválida");
    validacaoIdade();
    return;
  } else if (idadeUsuario > 100) {
    console.log("Idade inválida");
    validacaoIdade();
  }
  return idadeUsuario;
}
function validaEmail() {
  let emailUsuario = prompt(`Digte seu email: `);

  if (emailUsuario.length < 10) {
    console.log("Email inválido!");
    validaEmail();
    return;
  }
  if (emailUsuario.includes("@") == false) {
    console.log("Email inválido...Falta '@' no email");
    validaEmail();
    return;
  }
  if (emailUsuario.includes(".") == false) {
    console.log("Email inválido...Falta '.' no email");
    validaEmail();
    return;
  }
}
function verificaSenha() {
  let senhaUsuario = prompt("Digite a senha(minimo de 6 digitos): ");
  let repitaSenhaUsuario = prompt("Digite a senha novamente: ");

  if (senhaUsuario.length < 6) {
    console.log("A senha tem que ter no mínimo 6 digitos!");
    return verificaSenha();
  }
  if (senhaUsuario != repitaSenhaUsuario) {
    console.log("As senhas não coincidem");
    return verificaSenha();
  }
  return senhaUsuario;
}
//lista usuarios cadastrados
function listaUsuario() {
  limpaTela();
  let opcao;
  if (usuarios.length === 0) {
    console.log("Nenhum usuário cadastrado.");
  } else {
    console.log("1. Ordem Crescente");
    console.log("2. Ordem Decrescente");
    opcao = parseInt(prompt("Escolha a opção: "));

    switch (opcao) {
      case 1:
        for (let i = 0; i < usuarios.length; i++) {
          let statusTexto;
          if (usuarios[i].status) {
            statusTexto = "ATIVO";
          } else {
            statusTexto = "DESATIVADO";
          }
          console.log(
            `== ID ${usuarios[i].id} ==\nUsuário: ${usuarios[i].nome}\nIdade: ${usuarios[i].idade}\nSenha: ${usuarios[i].senha}\nStatus: ${statusTexto}\n`
          );
        }
        break;

      case 2:
        for (let i = usuarios.length - 1; i >= 0; i--) {
          let statusTexto;

          if (usuarios[i].status) {
            statusTexto = "ATIVO";
          } else {
            statusTexto = "DESATIVADO";
          }
          console.log(
            `== ID ${usuarios[i].id} ==\nUsuário: ${usuarios[i].nome}\nIdade: ${usuarios[i].idade}\nSenha: ${usuarios[i].senha}\nStatus: ${statusTexto}\n`
          );
        }
        break;
    }
    prompt("Aperte ENTER para voltar...");
    menuAdmin();
  }
}

function menuAdmin() {
  let opcao;

  do {
    limpaTela();
    console.log("== SISTEMA DO ADMINISTRADOR ==");
    console.log("\n== PRODUTOS ==\n");
    console.log("1. Cadastrar novo produto");
    console.log("2. Listar produtos");
    console.log("3. Soma de estoque");
    console.log("4. Editar produto");
    console.log("5. Alerta estoque baixo");
    console.log("\n== USUARIOS ==\n");
    console.log("6. Listar usuários");
    console.log("7. Desativar usuário");
    console.log("\n=====================\n");
    console.log("0. Sair");
    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
      case 1:
        cadastroBolo();
        break;
      case 2:
        listaCadastro();
        break;
      case 3:
        somarEstoque();
        break;
      case 4:
        editaCadastroBolo();
        break;
      case 5:
        alertaEstoqueBaixo();
        break;
      case 6:
        listaUsuario();
        break;
      case 7:
        desativarUsuario();
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