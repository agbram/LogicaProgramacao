programa {

  inclua biblioteca Matematica --> mat
  funcao inicio() {

    inteiro empregados, bicicletas_vend, valor_venda
    real salario_min, preco_custo, preco_final, preco_bicicleta_final, comissao_por_func , salario_final, lucro_loja, gasto_loja, comissao_total, receita_loja, gasto_func

    escreva("Número de empregados:")
    leia(empregados)

    escreva("Salário mínimo:")
    leia(salario_min)

    escreva("Bicicletas vendidas:")
    leia(bicicletas_vend)

    escreva("Valor bicicleta(s):")
    leia(preco_custo)

    preco_final = (preco_custo * 1.5)

    receita_loja = preco_final * bicicletas_vend
    
    comissao_total = ((preco_custo * 0.15) * bicicletas_vend)
    
    comissao_por_func = ((preco_custo * 0.15) * bicicletas_vend) / empregados
    
    gasto_loja = empregados * (2 * salario_min + comissao_total)

    salario_final = (salario_min * 2) + comissao_por_func
    
    gasto_func = salario_final * empregados

    escreva("\nO gasto por funcionário é: ", mat.arredondar(gasto_func,2))

    escreva("\n------------------------------------------------")

    escreva("\nO valor da bicicleta é: R$", mat.arredondar(preco_final,2))

    escreva("\n------------------------------------------------")

    escreva("\nO valor da comissão total é: ", mat.arredondar(comissao_total,2))

    escreva("\n------------------------------------------------")

    escreva("\nO valor da comissão por funcionário é: ", mat.arredondar(comissao_por_func,2))

    escreva("\n------------------------------------------------")

    escreva("\nO salário final é: R$", mat.arredondar(salario_final,2))

    escreva("\n------------------------------------------------")
    
    
    lucro_loja = (receita_loja - gasto_func)


    se(lucro_loja > 0){
    escreva("\nO lucro da loja é: R$", mat.arredondar(lucro_loja,2), " esse mês.\n")
    }
    se(lucro_loja < 0){
      escreva("\nA loja está com R$ ", mat.arredondar(lucro_loja,2)," de prejuízo esse mês.\n")
    }
    se(lucro_loja == 0){
      escreva("\nA loja nâo teve lucro esse mês.\n")
    }


    


    
  }
}
