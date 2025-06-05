programa {
  funcao inicio() {

    const inteiro alunos_c = 60
    const inteiro alunos_d = 20
    const inteiro total_alunos = 80

    inteiro reprovado_c, reprovado_d, resultreprovados_c, resultreprovados_d, total_reprov

    escreva("\nQual a porcentagem de alunos reprovados na turma C?")
    leia(reprovado_c)

    escreva("Qual a porcentagem de alunos reprovados na turma D?")
    leia(reprovado_d)
    
    escreva("\n----------------------------------------\n")

    resultreprovados_c = ((reprovado_c / 100) * alunos_c)

    resultreprovados_d = ((reprovado_d / 100) * alunos_d)

    escreva("\nA quantidade de alunos reprovados na turma C é ", resultreprovados_c, "\n")
    escreva("\nA quantidade de alunos reprovados na turma D é ", resultreprovados_d, "\n")

    total_reprov = ((resultreprovados_c + resultreprovados_d) * 100) / total_alunos

    escreva("\nO total de alunos reprovados é ", total_reprov, "%")

      
  }
}
