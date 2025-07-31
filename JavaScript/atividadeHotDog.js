
let pao = 0.9
let batataPalha = 0.5
let salcicha = 3.5
let pure = 2.15
let salada = 1.9

let dogSimples = pao + salcicha + batataPalha + pure
let dogDuplo = pao + (2 * salcicha) + pure + salada + batataPalha
let dogEspecial = pao + (3 * salcicha) + (2 * pure) + salada + batataPalha

console.log("Bem vindo a Lachonete!\n")
console.log("\n-- Cardápio --\n")
console.log("\nDog Simples:\npão, salcicha, batata palha, purê de batata\nR$" + dogSimples.toFixed(2))
console.log("\nDog Duplo:\npão, 2 salcichas, batata palha, purê de batata e salada\nR$" + dogDuplo.toFixed(2))
console.log("\nDog Especial:\npão, 3 salcichas, batata palha, purê de batata em dobro e salada\nR$" + dogEspecial.toFixed(2))

console.log("\nE aí qual vai escolher?")
