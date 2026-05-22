// Criação do mini-projeto avaliativo para o curso de desenvolvedor Frontend React do SCTEC | SENAI
// Projeto: SkillMatch JS
// Ideia: comparar candidatos com vagas de Frontend Developer Junior e mostrar o melhor match.

// Criação da classe Vaga que receberá as informações da vaga para realizar o match com o candidato.
// Aqui eu uso classe porque fica mais organizado para criar várias vagas com a mesma estrutura.
class Vaga {
  constructor(
    empresa,
    cargo,
    habilidades,
    requisitos,
    salario,
    modalidade,
    nivel,
    minSoftSkills,
    minHardSkills,
  ) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.softSkills = habilidades;
    this.hardSkills = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
    this.nivel = nivel;
    this.minSoftSkills = minSoftSkills;
    this.minHardSkills = minHardSkills;
  }

  // Método da classe Vaga.
  // Fiz esse resumo para não precisar repetir empresa e cargo toda hora no console.log.
  resumoVaga() {
    return `${this.cargo} - ${this.empresa}`;
  }

  // Outro método da classe, só para deixar as informações principais da vaga mais fáceis de visualizar.
  detalhesVaga() {
    return `${this.resumoVaga()} | ${this.modalidade} | ${this.nivel} | R$ ${this.salario}`;
  }
}

// Construir as vagas com arrays para armazenar várias vagas,
// e depois comparar cada vaga com cada candidato.
const vagas = [];

vagas.push(
  new Vaga(
    "Empresa A",
    "Frontend Developer Junior",
    [
      "Trabalho em equipe",
      "Comunicação",
      "Proatividade",
      "Responsabilidade",
      "Organização",
      "Pensamento crítico",
      "Criatividade",
      "Resolução de problemas",
      "Adaptabilidade",
      "Liderança",
      "Inteligência emocional",
      "Ética profissional",
      "Comprometimento",
      "Aprendizagem contínua",
      "Gestão do tempo",
      "Colaboração",
      "Empatia",
      "Autonomia",
    ],
    [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "GitHub",
      "Lógica de programação",
      "Algoritmos",
      "Consumo de API",
      "Manipulação de DOM",
      "Versionamento de código",
      "Responsividade",
      "Flexbox",
      "CSS Grid",
      "JSON",
      "Async/Await",
      "Promises",
      "Métodos de Array",
      "POO",
      "Firebase",
      "Debugging",
      "VS Code",
      "Terminal Linux",
      "NPM",
      "Deploy",
      "Kanban",
      "Testes básicos",
    ],
    3500,
    "Híbrido",
    "Junior",
    80,
    70,
  ),
);

vagas.push(
  new Vaga(
    "Empresa B",
    "Frontend Developer Junior",
    [
      "Trabalho em equipe",
      "Comunicação",
      "Proatividade",
      "Responsabilidade",
      "Organização",
      "Pensamento crítico",
      "Liderança",
      "Inteligência emocional",
      "Ética profissional",
      "Comprometimento",
      "Aprendizagem contínua",
      "Gestão do tempo",
      "Colaboração",
      "Empatia",
      "Autonomia",
    ],
    [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "GitHub",
      "Versionamento de código",
      "Responsividade",
      "Flexbox",
      "CSS Grid",
      "JSON",
      "Async/Await",
      "Promises",
      "Métodos de Array",
      "POO",
      "Banco de Dados",
      "SQL",
      "Firebase",
      "Debugging",
      "VS Code",
    ],
    3200,
    "Presencial",
    "Junior",
    75,
    65,
  ),
);

vagas.push(
  new Vaga(
    "Empresa C",
    "Frontend Developer Junior",
    [
      "Trabalho em equipe",
      "Comunicação",
      "Proatividade",
      "Responsabilidade",
      "Organização",
      "Pensamento crítico",
      "Inteligência emocional",
      "Ética profissional",
      "Comprometimento",
      "Aprendizagem contínua",
      "Gestão do tempo",
      "Colaboração",
      "Empatia",
      "Autonomia",
      "Disciplina",
      "Inovação",
      "Flexibilidade",
      "Resiliência",
      "Pontualidade",
    ],
    [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "GitHub",
      "Lógica de programação",
      "Algoritmos",
      "Consumo de API",
      "Manipulação de DOM",
      "Versionamento de código",
      "Responsividade",
      "Flexbox",
      "CSS Grid",
      "JSON",
      "Async/Await",
      "Promises",
      "VS Code",
      "Terminal Linux",
      "NPM",
      "Deploy",
      "Arquitetura cliente-servidor",
      "Kanban",
      "Testes básicos",
    ],
    2800,
    "Remoto",
    "Junior",
    60,
    60,
  ),
);

console.log("Vagas disponíveis:");
vagas.forEach((vaga) => console.log(vaga.detalhesVaga()));

// Criação da classe Pessoa para utilização de Herança.
// A ideia é deixar os dados comuns de qualquer pessoa em uma classe base.
class Pessoa {
  constructor(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }

  // Método da classe Pessoa.
  // Assim eu consigo apresentar a pessoa sem montar o texto toda vez.
  resumoPessoa() {
    return `${this.nome} | ${this.email} | ${this.telefone}`;
  }
}

// Criação da classe Candidato que herda de Pessoa.
// Como candidato também é uma pessoa, uso o extends para aproveitar nome, email e telefone.
class CandidatoFrontEnd extends Pessoa {
  constructor(nome, email, telefone, habilidades, requisitos) {
    super(nome, email, telefone);

    this.softSkills = habilidades;
    this.hardSkills = requisitos;
  }

  // Método da classe CandidatoFrontEnd.
  // Aqui mostro um resumo simples do candidato e a quantidade de skills cadastradas.
  resumoCandidato() {
    return `${this.resumoPessoa()} | SoftSkills: ${this.softSkills.length} | HardSkills: ${this.hardSkills.length}`;
  }
}

// Criação de candidatos fictícios para o console.log.
// Candidatos com diferentes habilidades e requisitos para testar match total, parcial ou sem match.
const candidato1 = new CandidatoFrontEnd(
  "João Silva",
  "joao@qualquercoisa.com",
  "11999999999",
  [
    "Comunicação",
    "Proatividade",
    "Responsabilidade",
    "Organização",
    "Pensamento crítico",
    "Inteligência emocional",
    "Ética profissional",
    "Comprometimento",
    "Aprendizagem contínua",
    "Gestão do tempo",
    "Colaboração",
    "Empatia",
    "Autonomia",
    "Disciplina",
  ],
  [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Lógica de programação",
    "Algoritmos",
    "Consumo de API",
    "Manipulação de DOM",
    "Versionamento de código",
    "Responsividade",
    "Flexbox",
    "CSS Grid",
    "JSON",
    "Async/Await",
    "Promises",
    "VS Code",
    "Terminal Linux",
    "NPM",
    "Deploy",
    "Arquitetura cliente-servidor",
    "Kanban",
    "Testes básicos",
  ],
);

const candidato2 = new CandidatoFrontEnd(
  "Maria Souza",
  "maria@casadabruxa.com",
  "4755555555",
  [
    "Comunicação",
    "Trabalho em equipe",
    "Proatividade",
    "Aprendizagem rápida",
    "Flexibilidade",
    "Ética profissional",
    "Gestão do tempo",
    "Colaboração",
    "Empatia",
    "Autonomia",
    "Disciplina",
    "Inovação",
    "Flexibilidade",
    "Resiliência",
    "Pontualidade",
  ],
  [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Responsividade",
    "Consumo de API",
    "VS Code",
    "Terminal Linux",
    "NPM",
    "Deploy",
    "Arquitetura cliente-servidor",
    "Kanban",
    "Testes básicos",
  ],
);

const candidato3 = new CandidatoFrontEnd(
  "Carlos Oliveira",
  "oliveira@bananeira.com",
  "11988888888",
  [
    "Trabalho em equipe",
    "Proatividade",
    "Pontualidade",
    "Aprendizagem rápida",
    "Flexibilidade",
    "Resiliência",
    "Gestão do tempo",
    "Colaboração",
    "Empatia",
    "Autonomia",
    "Disciplina",
  ],
  [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "CSS Grid",
    "JSON",
    "Async/Await",
    "Promises",
    "VS Code",
    "Terminal Linux",
    "NPM",
    "Deploy",
    "Arquitetura cliente-servidor",
    "Kanban",
    "Testes básicos",
  ],
);

const candidatos = [candidato1, candidato2, candidato3];

console.log("\nCandidatos cadastrados:");
candidatos.forEach((candidato) => console.log(candidato.resumoCandidato()));

// Closure para contar quantas análises foram realizadas.
// A variável totalAnalises fica guardada dentro da função, como se fosse uma memória particular do contador.
const criarContadorAnalises = () => {
  let totalAnalises = 0;

  return () => {
    totalAnalises++;
    return totalAnalises;
  };
};

const contadorAnalises = criarContadorAnalises();

// Closure para criar uma regra de aprovação.
// Eu passo a porcentagem mínima e a função de dentro lembra desse valor depois.
const criarRegraAprovacao = (porcentagemMinima) => {
  return (porcentagemCalculada) => porcentagemCalculada >= porcentagemMinima;
};

// Função usando callback.
// Ela calcula o percentual de compatibilidade e depois entrega o resultado para outra função decidir o que fazer.
const calcularPercentual = (listaDaVaga, listaDoCandidato, callback) => {
  const itensEncontrados = listaDaVaga.filter((item) =>
    listaDoCandidato.includes(item),
  );

  const percentual = Math.round((itensEncontrados.length / listaDaVaga.length) * 100);

  return callback(percentual, itensEncontrados);
};

// Função para classificar a compatibilidade.
// Separei para o relatório ficar mais limpo.
const classificarCompatibilidade = (porcentagemHard, porcentagemSoft) => {
  if (porcentagemHard >= 80 || porcentagemSoft >= 80) {
    return "Alta compatibilidade";
  }

  if (porcentagemHard >= 50 || porcentagemSoft >= 50) {
    return "Média compatibilidade";
  }

  return "Baixa compatibilidade";
};

// Função para analisar uma vaga específica para um candidato específico.
// Aqui ficam os principais métodos de array usados no projeto: filter, every e cálculo com callback.
const analisarVaga = (candidato, vaga) => {
  // Callback usado para calcular as HardSkills.
  const resultadoHard = calcularPercentual(
    vaga.hardSkills,
    candidato.hardSkills,
    (porcentagem, encontradas) => {
      return {
        porcentagem,
        encontradas,
      };
    },
  );

  // Callback usado para calcular as SoftSkills.
  const resultadoSoft = calcularPercentual(
    vaga.softSkills,
    candidato.softSkills,
    (porcentagem, encontradas) => {
      return {
        porcentagem,
        encontradas,
      };
    },
  );

  // Uso do every.
  // Aqui eu verifico se o candidato possui todas as HardSkills que aparecem como base mínima para Frontend.
  // Não coloquei todas as skills da vaga como obrigatórias porque ficaria pesado demais para uma vaga Junior.
  const hardSkillsBase = ["HTML", "CSS", "JavaScript"];

  const possuiBaseFrontend = hardSkillsBase.every((skill) =>
    candidato.hardSkills.includes(skill),
  );

  // Habilidades faltantes.
  const hardSkillsFaltantes = vaga.hardSkills.filter(
    (skill) => !candidato.hardSkills.includes(skill),
  );

  const softSkillsFaltantes = vaga.softSkills.filter(
    (skill) => !candidato.softSkills.includes(skill),
  );

  // Aqui uso closure para criar as regras de aprovação com os mínimos de cada vaga.
  const validarHardSkills = criarRegraAprovacao(vaga.minHardSkills);
  const validarSoftSkills = criarRegraAprovacao(vaga.minSoftSkills);

  const aprovadoHard = validarHardSkills(resultadoHard.porcentagem);
  const aprovadoSoft = validarSoftSkills(resultadoSoft.porcentagem);
  const aprovadoGeral = aprovadoHard && aprovadoSoft && possuiBaseFrontend;

  const compatibilidadeGeral = Math.round(
    (resultadoHard.porcentagem + resultadoSoft.porcentagem) / 2,
  );

  const classificacao = classificarCompatibilidade(
    resultadoHard.porcentagem,
    resultadoSoft.porcentagem,
  );

  return {
    candidato,
    vaga,
    porcentagemHard: resultadoHard.porcentagem,
    porcentagemSoft: resultadoSoft.porcentagem,
    compatibilidadeGeral,
    hardSkillsEncontradas: resultadoHard.encontradas,
    softSkillsEncontradas: resultadoSoft.encontradas,
    hardSkillsFaltantes,
    softSkillsFaltantes,
    possuiBaseFrontend,
    aprovadoHard,
    aprovadoSoft,
    aprovadoGeral,
    classificacao,
    numeroAnalise: contadorAnalises(),
  };
};

// Função para exibir o relatório final de cada análise.
// Separei o console.log para o código não virar um novelo de lã.
const exibirRelatorio = (resultado) => {
  console.log(`
========================================
ANÁLISE DE COMPATIBILIDADE
========================================

Candidato: ${resultado.candidato.nome}
Empresa: ${resultado.vaga.empresa}
Vaga: ${resultado.vaga.cargo}
Resumo da vaga: ${resultado.vaga.resumoVaga()}

HardSkills: ${resultado.porcentagemHard}% - ${resultado.aprovadoHard ? "aprovado" : "reprovado"}
SoftSkills: ${resultado.porcentagemSoft}% - ${resultado.aprovadoSoft ? "aprovado" : "reprovado"}
Base Frontend obrigatória: ${resultado.possuiBaseFrontend ? "possui HTML, CSS e JavaScript" : "não possui toda a base"}

Classificação: ${resultado.classificacao}

Status Geral:
${resultado.aprovadoGeral ? "APROVADO PARA ENTREVISTA" : "NÃO APROVADO NESTA VAGA"}

Faltam HardSkills:
${resultado.hardSkillsFaltantes.length > 0 ? resultado.hardSkillsFaltantes.join(", ") : "Nenhuma"}

Faltam SoftSkills:
${resultado.softSkillsFaltantes.length > 0 ? resultado.softSkillsFaltantes.join(", ") : "Nenhuma"}

Recomendação:
${
  resultado.hardSkillsFaltantes.length > 0 || resultado.softSkillsFaltantes.length > 0
    ? `Desenvolver ${[
        ...resultado.hardSkillsFaltantes,
        ...resultado.softSkillsFaltantes,
      ].join(", ")}.`
    : "Perfil completo para esta vaga."
}

Análise número: ${resultado.numeroAnalise}
========================================
`);
};

// Função para realizar o match entre o candidato e as vagas disponíveis.
const calcularCompatibilidade = (candidato) => {
  // Primeiro eu gero um array com todos os resultados desse candidato.
  const resultados = vagas.map((vaga) => analisarVaga(candidato, vaga));

  // Depois eu mostro o relatório de cada vaga.
  resultados.forEach((resultado) => exibirRelatorio(resultado));

  // Uso do reduce para encontrar a melhor vaga.
  // A comparação olha a compatibilidade geral e guarda o melhor resultado encontrado.
  const melhorVaga = resultados.reduce((melhor, atual) => {
    if (atual.compatibilidadeGeral > melhor.compatibilidadeGeral) {
      return atual;
    }

    return melhor;
  });

  console.log(`
🏆 MELHOR MATCH PARA ${candidato.nome}

Empresa: ${melhorVaga.vaga.empresa}
Vaga: ${melhorVaga.vaga.cargo}
Resumo: ${melhorVaga.vaga.resumoVaga()}
Compatibilidade Geral: ${melhorVaga.compatibilidadeGeral}%
Status: ${melhorVaga.aprovadoGeral ? "APROVADO PARA ENTREVISTA" : "MELHOR OPÇÃO, MAS AINDA PRECISA DESENVOLVER ALGUNS PONTOS"}
`);

  return melhorVaga;
};

// Promise para simular carregamento de vagas.
// Usei setTimeout só para parecer que o sistema está buscando os dados antes de rodar.
const buscarVagas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 2000);
  });
};

// Callback para exibir mensagem final do sistema.
// A função finalizarSistema recebe outra função e executa no final.
const finalizarSistema = (callback) => {
  callback();
};

// Async/Await para execução do sistema.
const executarSistema = async () => {
  const vagasDisponiveis = await buscarVagas();

  console.log("\nSistema carregado:");
  vagasDisponiveis.forEach((vaga) => console.log(vaga.resumoVaga()));

  // Aqui uso map porque quero rodar a compatibilidade para todos os candidatos.
  const melhoresMatches = candidatos.map((candidato) => calcularCompatibilidade(candidato));

  console.log("\nResumo geral dos melhores matches:");
  melhoresMatches.forEach((resultado) => {
    console.log(
      `${resultado.candidato.nome} -> ${resultado.vaga.resumoVaga()} | ${resultado.compatibilidadeGeral}%`,
    );
  });

  finalizarSistema(() => {
    console.log("\nSistema finalizado com sucesso!");
  });
};

executarSistema();