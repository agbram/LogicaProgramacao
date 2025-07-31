let personagem = "agbram"
let moedas = 0

console.log("Bem-vindo ao jogo!\n")

console.log(personagem + ": " + moedas + " coins")

moedas = 1

console.log(personagem + ": " + moedas + " coins")

moedas++

console.log(personagem + ": " + moedas + " coins")

moedas++
moedas++
moedas += 5
moedas -= 2
moedas += 3

console.log(personagem + ": " + moedas + " coins")

moedas += 10

moedas = (moedas / 2)

moedas++ //checkpoint

let checkpoint = moedas

moedas = (moedas * 2)

console.log(personagem + ": " + moedas + " coins")

moedas = 0

console.log(personagem + " MORREU! -- "+ moedas + " coins")

console.log(personagem + " REVIVEU! -- "+ checkpoint + " coins")

