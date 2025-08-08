let prompt = require("prompt-sync")();

let users = [
  { name: "admin", password: "123", admin: true },
  { name: "user1", password: "321", admin: false },
  { name: "user2", password: "222", admin: false },
];

let user = null; //cria uma variavel nula

main();

function main() {
  console.log("\n===  SISTEMA DE LOGIN ===");
  let name = prompt("Digite o nome: ");
  let password = prompt("Digite a senha: ");
  auth(name, password);
  
  if(user.admin == true){
    //== PROX AULA searchAll() ==
  } else {
    //== PROX AULA searchId(user) ==
  }
}

function auth(name, password) {
  for (let i = 0; i < users.length; i++) {
    if (name == users[i].name && password == users[i].password) {
      user = users[i];
      console.log(`Usuário [${user.name}] autenticado com sucesso`);
    }
  }

  if(user == null){
    console.log("Usário ou senha inválidos...")
    console.log("Ja tem cadastro?")
    main();
    return;
  }
}
