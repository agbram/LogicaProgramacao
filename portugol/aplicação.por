programa {
  funcao inicio() {

    real valor, rendimento, mes


    escreva("Qual o valor do depósito:")
    leia(valor)

    escreva("A quantidade de meses para a aplicação:")
    leia(mes)

    rendimento = valor +((0.05 * mes)*valor)
    

    escreva("\nO valor do depósito de R$ ", valor," após ", mes," mês(ses) renderá R$ ", rendimento)
    
  }
}
