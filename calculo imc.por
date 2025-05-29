programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    
    real peso, altura, imc

    escreva("\nMe diga seu peso:\n")
    leia(peso)

    escreva("\nMe diga sua altura:\n")
    leia(altura)

    imc = peso / (altura * altura)

    escreva("\nO seu peso é ",peso, " kg")
    escreva("\nA sua altura é ",altura, " m\n")
    escreva("\nSeu IMC é ", mat.arredondar(imc, 1))

    se(imc < 18.5){
      escreva("\nVocê está abaixo do peso\n")
    } senao se(imc >= 18.5 e imc <= 24.9){
      escreva("\nVocê está com o peso normal\n")
    } senao se(imc >= 25 e imc <= 29.9){
      escreva("\nVocê esta acima do peso\n")
    } senao se(imc >= 30 e imc <= 34.9){
      escreva("\nVocê está com obesidade grau 1\n")
    } senao se(imc >= 35 e imc <= 39.9){
      escreva("\nVocê está com obesidade grau 2\n")
    } senao{
      escreva("\nVocê está com obesidade grau 3\n")
    }
  }
}
