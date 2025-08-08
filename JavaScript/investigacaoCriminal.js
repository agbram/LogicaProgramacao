const prompt = require("prompt-sync")({ sigint: true });

// === CONFIGURAÇÕES GLOBAIS ===
let dificuldade;               // easy / medium / hard (chance detecção mentira)
let papelSelecionado;          // "cidadao" | "ex" | "atual"
let suspeitos = {};            // objeto com dados de cada personagem
let jogador = {
  pontosVerdade:  0,
  pontosMentira:  0,
  pistas:         [],
  respostas:      [],
};
let tensaoDetetive = 0;
const MAX_PISTAS = 5;

// === FLUXO PRINCIPAL ===
function main() {
  limparTela();
  console.log("\n🔎 BEM-VINDO AO INTERROGATÓRIO MISTERIOSO 🔎\n");
  exibirRegrasDoJogo();
  escolherDificuldade();
  selecionarPapel();
  mostrarCenarioCrime();
  mostrarDossie(suspeitos[papelSelecionado]);
  mostrarConexao();
  investigarCena();
  iniciarInterrogatorio();
  gerarRelatorioFinal();
  perguntarReplay();
}

// 1) Regras do jogo
// 1) Regras do jogo
function exibirRegrasDoJogo() {
  limparTela();
  console.log("\n📜 REGRAS DO JOGO --- INTERROGATÓRIO MISTERIOSO 📜\n");

  console.log("🎯 OBJETIVO DO JOGO:");
  console.log("   Convença o detetive de que você é inocente — mesmo que precise mentir!\n");

  console.log("🎭 1. Você assume um dos três papéis:");
  console.log("   - Joana (cidadã comum)");
  console.log("   - Eduardo (ex-parceiro)");
  console.log("   - Lara (parceira atual)\n");

  console.log("🔍 2. Antes do interrogatório, colete pistas:");
  console.log("   - As pistas reforçam sua defesa, mas cuidado ao revelar detalhes.\n");

  console.log("⚖️ 3. No interrogatório, responda o que quiser:");
  console.log("   - Suas mentiras podem passar despercebidas — ou ser detectadas.");
  console.log("   - Cada mentira detectada aumenta a suspeita do detetive.\n");

  console.log("🏆 4. Ao final, o detetive dará sua classificação:");
  console.log("   - Se conseguir enganar bem, será considerado INOCENTE.");
  console.log("   - Caso contrário, pode virar CÚMPLICE ou até ser marcado como ASSASSINO.\n");

  console.log("✅ Pressione ENTER para começar e testar sua habilidade de enganar!");
  prompt();
}


// 2) Escolha de dificuldade
function escolherDificuldade() {
  console.log("Escolha o nível de dificuldade:");
  console.log("1) Easy   (30% de chance de detectar mentiras)");
  console.log("2) Medium (50% de chance)");
  console.log("3) Hard   (70% de chance)");
  let opt = prompt("> ");
  switch (opt) {
    case "1": dificuldade = 0.3; break;
    case "2": dificuldade = 0.5; break;
    case "3": dificuldade = 0.7; break;
    default:
      console.log("Opção inválida, usando Medium.");
      dificuldade = 0.5;
  }
  console.log(`Chance de detecção de mentira: ${dificuldade * 100}%`);
  prompt("Pressione ENTER para continuar...");
}

// 3) Seleção de papel e criação de objeto suspeito
function selecionarPapel() {
  limparTela();
  console.log("=== ESCOLHA SEU PAPEL ===\n");
  console.log("1) Cidadão comum   — Joana M. Silva, enfermeira aposentada");
  console.log("2) Ex-parceiro     — Eduardo Vieira, agente de viagens");
  console.log("3) Parceiro atual  — Lara Fernandes, designer freelancer\n");
  let opt = prompt("Sua escolha (1-3): ");
  switch (opt) {
    case "1":
      papelSelecionado = "cidadao";
      suspeitos.cidadao = {
        nome:      "Joana M. Silva",
        papel:     "Enfermeira aposentada / Vizinha há 12 anos",
        perguntas: perguntasCidadao(),
        conexao: [
          "Foi a primeira a ouvir o grito e chamou ajuda.",
          "Viu uma sombra masculina e guardou silêncio sobre o rosto.",
          "Vicente havia deixado remédio para insônia em sua casa."
        ]
      };
      break;
    case "2":
      papelSelecionado = "ex";
      suspeitos.ex = {
        nome:      "Eduardo Vieira",
        papel:     "Agente de viagens / Término há 8 meses",
        perguntas: perguntasExParceiro(),
        conexao: [
          "Devia R$5.000 a Vicente por apostas.",
          "Câmeras o viram rondando o prédio na madrugada.",
          "A carta com iniciais “RV” pode apontar sua agência."
        ]
      };
      break;
    case "3":
      papelSelecionado = "atual";
      suspeitos.atual = {
        nome:      "Lara Fernandes",
        papel:     "Designer freelancer / Parceira atual",
        perguntas: perguntasParceiroAtual(),
        conexao: [
          "Tinha chaves extras do apartamento da vítima.",
          "Enviou mensagens urgentes a Eduardo naquela noite.",
          "Batom vermelho encontrado na cena do crime."
        ]
      };
      break;
    default:
      console.log("Opção inválida!");
      return selecionarPapel();
  }
}

// 4) Exibe cena do crime geral
function mostrarCenarioCrime() {
  limparTela();
  console.log("\n🔦 CENA DO CRIME 🔦\n");
  console.log("- Sala de Vicente Santos revirada.");
  console.log("- Taça de vinho quebrada e tapete molhado.");
  console.log("- Carta rasgada com iniciais “RV”.");
  console.log("- Vidro da janela quebrado e relógio estranho no criado-mudo.");
  prompt("\nPressione ENTER para ver como você se conecta a isso...");
}

// 5) Exibe dossiê do personagem
function mostrarDossie(data) {
  limparTela();
  console.log("\n📁 DOSSIÊ DO PERSONAGEM 📁\n");
  console.log(`Nome: ${data.nome}`);
  console.log(`Papel: ${data.papel}`);
  prompt("\nPressione ENTER para ver suas conexões...");
}

// 6) Exibe conexões com o crime
function mostrarConexao() {
  limparTela();
  console.log("\n🔗 SUAS CONEXÕES COM O CRIME 🔗\n");
  suspeitos[papelSelecionado].conexao.forEach((c, i) => {
    console.log(`${i + 1}. ${c}`);
  });
  prompt("\nPressione ENTER para buscar pistas na cena...");
}

// 7) Investigação de cena do crime (busca de pistas)
function investigarCena() {
  limparTela();
  console.log("\n🔦 INVESTIGAÇÃO DE CENA 🔦\n");
  console.log(`Você pode coletar até ${MAX_PISTAS} pistas.\n`);
  for (let i = 0; i < MAX_PISTAS; i++) {
    const achou = Math.random() < 0.6;
    if (achou) {
      const pista = gerarPistaAleatoria();
      jogador.pistas.push(pista);
      console.log(`[${i + 1}] Pista encontrada: ${pista}`);
    } else {
      console.log(`[${i + 1}] Nenhuma pista encontrada.`);
    }
    prompt("Pressione ENTER para continuar...");
  }
  console.log(`\nTotal de pistas coletadas: ${jogador.pistas.length}`);
  prompt("Pressione ENTER para iniciar o interrogatório...");
}

// 8) Gera pistas aleatórias
function gerarPistaAleatoria() {
  const pool = [
    "Pegadas molhadas na calçada",
    "Vidro quebrado no peitoril",
    "Som de sirene gravado no celular",
    "Carta rasgada com iniciais 'RV'",
    "Mancha de batom vermelho na taça"
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}

// 9) Inicia interrogatório
function iniciarInterrogatorio() {
  limparTela();
  console.log("\n⚖️ INTERROGATÓRIO ⚖️\n");
  suspeitos[papelSelecionado].perguntas.forEach((q, idx) => {
    console.log(`Pergunta ${idx + 1}: ${q.texto}`);
    q.opcoes.forEach(o => console.log(o));
    let resp = prompt("Resposta: ");
    avaliarResposta(q, resp);
    console.log();
  });
}

// 10) Avalia resposta e aplica pontuação
function avaliarResposta(pergunta, resposta) {
  jogador.respostas.push(`${pergunta.texto} → ${resposta}`);
  if (resposta.trim() === pergunta.certa.toString()) {
    jogador.pontosVerdade++;
    console.log("✅ DETETIVE: Resposta plausível.");
  } else {
    if (Math.random() < dificuldade) {
      jogador.pontosMentira++;
      tensaoDetetive += 2;
      console.log("😠 DETETIVE: Mentira detectada!");
    } else {
      jogador.pontosVerdade++;
      tensaoDetetive += 1;
      console.log("🤨 DETETIVE: Estranho, mas continuemos.");
    }
  }
}

// Perguntas para cada papel
function perguntasCidadao() {
  return [
    { texto: "Você viu algo estranho na rua ontem à noite?", opcoes: ["1) SIM","2) NÃO","3) PREFIRO NÃO DIZER"], certa: 1 },
    { texto: "Você conhece o suposto criminoso?",               opcoes: ["1) SIM","2) NÃO","3) TALVEZ"],          certa: 1 },
    { texto: "Ouviu barulhos vindos da casa da vítima?",         opcoes: ["1) SIM","2) NÃO","3) ESTAVA DORMINDO"], certa: 1 },
    { texto: "Notou alguém saindo às pressas?",                 opcoes: ["1) SIM","2) NÃO","3) NÃO SEI"],        certa: 1 },
  ];
}
function perguntasExParceiro() {
  return [
    { texto: "Telefonou para a vítima no dia do crime?",       opcoes: ["1) SIM","2) NÃO","3) PREFIRO NÃO RESPONDER"], certa: 2 },
    { texto: "Esteve no local da vítima nas últimas 24h?",     opcoes: ["1) SIM","2) NÃO","3) MENTIR"],           certa: 2 },
    { texto: "Você viu Lara perto da cena?",                   opcoes: ["1) SIM","2) NÃO","3) NÃO ME LEMBRO"],    certa: 3 },
    { texto: "Devia algo à vítima?",                           opcoes: ["1) SIM","2) NÃO","3) NÃO SEI"],          certa: 1 },
  ];
}
function perguntasParceiroAtual() {
  return [
    { texto: "Você estava com a vítima no momento do crime?",  opcoes: ["1) SIM","2) NÃO","3) MENTIR"],           certa: 2 },
    { texto: "Escondeu provas da cena?",                      opcoes: ["1) SIM","2) NÃO","3) NÃO RESPONDO"],     certa: 2 },
    { texto: "Confiava totalmente na vítima?",                opcoes: ["1) SIM","2) NÃO","3) NUNCA CONFIEI"],    certa: 1 },
    { texto: "Tem acesso às chaves da casa da vítima?",       opcoes: ["1) SIM","2) NÃO","3) OUTRA PESSOA"],      certa: 3 },
  ];
}

// 11) Gera relatório final
function gerarRelatorioFinal() {
  limparTela();
  console.log("\n📋 RELATÓRIO FINAL 📋\n");
  console.log(`✅  Pontos Verdade:     ${jogador.pontosVerdade}`);
  console.log(`⚠️  Pontos Mentira:     ${jogador.pontosMentira}`);
  console.log(`🔍  Pistas coletadas:   ${jogador.pistas.length}\n`);

  // Classificação
  if (jogador.pontosMentira > 3) {
    console.log("💥 ASSASSINO CONFIRMADO");
  } else if (jogador.pontosMentira >= 2) {
    console.log("🚩 ALTAMENTE SUSPEITO");
  } else if (jogador.pontosMentira === 1) {
    console.log("❓ CÚMPLICE PROVÁVEL");
  } else {
    console.log("✅ INOCENTE");
  }

  // Histórico de respostas
  console.log("\n📜 Histórico de Respostas:");
  jogador.respostas.forEach((r, i) => console.log(` ${i + 1}. ${r}`));

  // Pistas levantadas
  console.log("\n🔎 Pistas Coletadas:");
  jogador.pistas.forEach((p, i) => console.log(`${i + 1}. ${p}`));
}

// 12) Pergunta para jogar novamente
function perguntarReplay() {
  let again = prompt("\nDeseja jogar novamente? (s/n): ");
  if (again.toLowerCase() === "s") {
    resetarJogo();
    main();
  } else {
    console.log("\nObrigado por jogar! Até a próxima.\n");
    process.exit(0);
  }
}

// 13) Reseta variáveis de estado
function resetarJogo() {
  dificuldade      = 0;
  papelSelecionado = "";
  suspeitos        = {};
  jogador.pontosVerdade = 0;
  jogador.pontosMentira = 0;
  jogador.respostas    = [];
  jogador.pistas       = [];
  tensaoDetetive  = 0;
}

// 14) Limpa console (cross‐platform)
function limparTela() {
  console.clear && console.clear();
}

// === INICIA O JOGO ===
main();