programa {
  funcao inicio() {

    real kilo, duracao, consumo, resultado, gramas, dias

    escreva("Quantidade de Arroz(Kg):")
    leia(kilo)

    escreva("Quantas gramas você consome de arroz por dia: ")
    leia(consumo)

    gramas = kilo * 1000

    dias = gramas / consumo


   escreva("\nCom ", kilo, "kgs, você conseguirá se alimentar por alimentar por ", dias," dias")
   
    
  }
}
