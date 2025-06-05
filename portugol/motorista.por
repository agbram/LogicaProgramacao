programa {
  funcao inicio() {

    const real combustivel = 2.50

    real odometro_inicial, odometro_final, qtdlitrosgasto, total_km, valor_gasto, lucro_dia, valor_recebido, km_litro
    
    escreva("KM Início: ")
    leia(odometro_inicial)

    escreva("KM Final: ")
    leia(odometro_final)

    escreva("\n-----------------------------------------\n")

    total_km = odometro_final - odometro_inicial

    escreva("A quantidade rodada no dia foi: ", total_km,"Km\n")

    escreva("\n-----------------------------------------\n")

    escreva("Quantidade de litros gastos:")
    leia(qtdlitrosgasto)

    escreva("\n-----------------------------------------\n")

    escreva("Qual a quantidade recebido pelos passageiros?\n")
    leia(valor_recebido)

    escreva("\n------------------------------------------\n")

    km_litro = total_km / qtdlitrosgasto

    escreva("O carro faz ", km_litro," (Km/l)")

    escreva("\n-------------------------------------------\n")

    valor_gasto = qtdlitrosgasto * combustivel

    escreva("O valor gasto no combustível foi: ", valor_gasto)

    escreva("\n--------------------------------------------\n")

    lucro_dia = valor_recebido - valor_gasto

    se(lucro_dia > 0){
    escreva("Valor dia: ",lucro_dia, " Você saiu no lucro hoje\n")
    } senao se(lucro_dia == 0){
      escreva("Valor dia: ",lucro_dia," Você nao teve lucro hoje\n")
    } senao se(lucro_dia < 0){
      escreva("Valor dia: ",lucro_dia," Você saiu no prejuízo hoje\n")
    }

    



    

    


  }
}
