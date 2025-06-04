programa {

  
    inclua biblioteca Matematica --> mat
  
  funcao inicio() {

    real milhas, km, conversao

    escreva("Valor das milhas:")
    leia(milhas)

    km = milhas * 0.6214
    km = mat.arredondar(km,2)

    escreva("\nO valor da conversão de ",milhas,"mi é ",km,"Km\n")
    
  }
}
