programa {

  inclua biblioteca Matematica --> mat

  funcao inicio() {
  
    inteiro numero, milhar,centena,dezena,unidade,mod

    escreva("Um numéro inteiro:")
    leia(numero)

    escreva("--------------------------\n")

    se(numero > 999){
      milhar = (numero / 1000) % 10
      escreva("Milhar: ",milhar,"\n")
    }se(numero > 99){
      centena = (numero /100) % 10
      escreva("Centena: ",centena,"\n")
    }se(numero > 9){
      dezena = (numero / 10) % 10
      escreva("Dezena: ",dezena,"\n")
    }se(numero > -1){
      unidade = (numero / 1) % 10
      escreva("Unidade:",unidade,"\n")
    }
    
  }
}
