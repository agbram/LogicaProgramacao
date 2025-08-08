let prompt = require("prompt-sync")();

let usuario = [{
    id: "1",
    nome: "Gustavo",
    idade: 20,
    telefone: "(16) 99245-5837",
    endereco: {
        rua: "Travessa Orquidea Reis Ortega",
        numero: "448",
        bairro: "Douradinho"
    }
},
{   id: "2",
    nome: "Rafael",
    idade: 30,
    telefone: "(11) 97018-4603",
    endereco: {
        rua: "Episcopal",
        numero: "700",
        bairro: "Centro"
    }
}
]

console.log(` == ID: ${usuario[0].id} ==\nUsuário: ${usuario[0].nome}\nIdade: ${usuario[0].idade}\nTelefone: ${usuario[0].telefone}\nEndereço:\n${usuario[0].endereco.rua}, ${usuario[0].endereco.numero} - ${usuario[0].endereco.bairro}`)
console.log(`\n == ID: ${usuario[1].id} ==\nUsuário: ${usuario[1].nome}\nIdade: ${usuario[1].idade}\nTelefone: ${usuario[1].telefone}\nEndereço:\n${usuario[1].endereco.rua}, ${usuario[1].endereco.numero} - ${usuario[1].endereco.bairro}`)

function cadastrar(){

    
    
}