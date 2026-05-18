//Criação do mini-projeto avaliativo para o curso de desenvolvedor Frontend React do SCTEC | SENAI

//Criação da classe Vaga que receberá as informações da vaga e do candidato para realizar o match.

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
}

//Construir as vagas com arrays para armazenar várias vagas e candidatos,
//e criar funções para realizar o match entre eles.

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

console.log("Vagas Disponíveis:", vagas);

//Criação da classe Pessoa para utilização de Herança.

class Pessoa {
  constructor(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}

//Criação da classe Candidato que receberá as informações do candidato para realizar o match.

class CandidatoFrontEnd extends Pessoa {
  constructor(nome, email, telefone, habilidades, requisitos) {
    super(nome, email, telefone);

    this.softSkills = habilidades;
    this.hardSkills = requisitos;
  }
}

//Criação de candidatos fictícios para o console.log.
//Candidatos com diferentes habilidades e requisitos para testar o match total, parcial ou sem match com as diferentes empresas e vagas criadas.

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

console.log("Candidato:", candidato1);
console.log("Candidato:", candidato2);
console.log("Candidato:", candidato3);

//Closure para contar quantas análises foram realizadas.

const criarContadorAnalises = () => {
  let totalAnalises = 0;

  return () => {
    totalAnalises++;
    return totalAnalises;
  };
};

const contadorAnalises = criarContadorAnalises();
//Função para realizar o match entre o candidato e as vagas disponíveis.

const calcularCompatibilidade = (candidato) => {
  // Calcular maior compatibilidade entre hard skills e soft skills para classificação final

  let melhorVaga = null;
  let maiorCompatibilidade = 0;

  vagas.forEach((vaga) => {
    //Compatibilidade HardSkills

    const requisitosIguais = vaga.hardSkills.filter((skill) =>
      candidato.hardSkills.includes(skill),
    );

    const porcentagemHard = Math.round(
      (requisitosIguais.length / vaga.hardSkills.length) * 100,
    );

    //Compatibilidade SoftSkills

    const habilidadesIguais = vaga.softSkills.filter((skill) =>
      candidato.softSkills.includes(skill),
    );

    const porcentagemSoft = Math.round(
      (habilidadesIguais.length / vaga.softSkills.length) * 100,
    );

    const compatibilidadeGeral = Math.round(
      (porcentagemHard + porcentagemSoft) / 2,
    );

    if (compatibilidadeGeral > maiorCompatibilidade) {
      maiorCompatibilidade = compatibilidadeGeral;
      melhorVaga = vaga;
    }
    

    //Habilidades faltantes

    const hardSkillsFaltantes = vaga.hardSkills.filter(
      (skill) => !candidato.hardSkills.includes(skill),
    );

    const softSkillsFaltantes = vaga.softSkills.filter(
      (skill) => !candidato.softSkills.includes(skill),
    );

    //Booleanos de aprovação

    const aprovadoHard = porcentagemHard >= vaga.minHardSkills;

    const aprovadoSoft = porcentagemSoft >= vaga.minSoftSkills;

    const aprovadoGeral = aprovadoHard && aprovadoSoft;

    //Classificação de compatibilidade

    let classificacao = "";

    if (porcentagemHard >= 80 || porcentagemSoft >= 80) {
      classificacao = "Alta compatibilidade";
    } else if (porcentagemHard >= 50 || porcentagemSoft >= 50) {
      classificacao = "Média compatibilidade";
    } else {
      classificacao = "Baixa compatibilidade";
    }

    //Relatório final


    console.log(`
========================================
ANÁLISE DE COMPATIBILIDADE
========================================

Candidato: ${candidato.nome}
Empresa: ${vaga.empresa}
Vaga: ${vaga.cargo}

HardSkills: ${porcentagemHard}% - ${aprovadoHard ? "aprovado" : "reprovado"}

SoftSkills: ${porcentagemSoft}% - ${aprovadoSoft ? "aprovado" : "reprovado"}

Classificação: ${classificacao}

Status Geral:
${aprovadoGeral ? "APROVADO PARA ENTREVISTA" : "NÃO APROVADO NESTA VAGA"}

Faltam HardSkills:
${hardSkillsFaltantes.length > 0 ? hardSkillsFaltantes.join(", ") : "Nenhuma"}

Faltam SoftSkills:
${softSkillsFaltantes.length > 0 ? softSkillsFaltantes.join(", ") : "Nenhuma"}

Recomendação:
${
  hardSkillsFaltantes.length > 0 || softSkillsFaltantes.length > 0
    ? `Desenvolver ${[...hardSkillsFaltantes, ...softSkillsFaltantes].join(
        ", ",
      )}.`
    : "Perfil completo para esta vaga."
}

Análise número: ${contadorAnalises()}
========================================
`);
  });


console.log(`
🏆 MELHOR MATCH PARA ${candidato.nome}

Empresa: ${melhorVaga.empresa}
Vaga: ${melhorVaga.cargo}

Compatibilidade Geral:
${maiorCompatibilidade}%
`);

};

//Promise para simular carregamento de vagas.

const buscarVagas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 2000);
  });
};

//Async/Await para execução do sistema.

const executarSistema = async () => {
  const vagasDisponiveis = await buscarVagas();

  console.log("Sistema carregado:", vagasDisponiveis);

  calcularCompatibilidade(candidato1);
  calcularCompatibilidade(candidato2);
  calcularCompatibilidade(candidato3);
};

executarSistema();

//Callback para exibir mensagem final do sistema.

const finalizarSistema = (callback) => {
  callback();
};

finalizarSistema(() => {
  console.log("Sistema finalizado com sucesso!");
});
