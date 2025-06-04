programa {

  inclua biblioteca Matematica --> mat 
  
  funcao inicio() {

    real salario, reajuste

    escreva("Salário:")
    leia(salario)

    reajuste = salario * 1.15
    reajuste = mat.arredondar(reajuste,2)

    escreva("O salário reajustado com 15% é R$ ", reajuste)
    
  }
}
