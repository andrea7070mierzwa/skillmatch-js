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
      "Adaptabilidade",
      "Liderança",
      "Inteligência emocional",
    ],
    [
      "Manipulação de DOM",
      "Versionamento de código",
      "Responsividade",
      "Flexbox",
      "CSS Grid",
      "JSON",
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
      "Ética profissional",
      "Comprometimento",
      "Aprendizagem contínua",
    ],
    [
      "Consumo de API",
      "Async/Await",
      "Promises",
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
      "Pensamento crítico",
      "Criatividade",
      "Resolução de problemas",
    ],
    [
      "Terminal Linux",
      "NPM",
      "Deploy",
      "Arquitetura cliente-servidor",
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
    "Responsabilidade",
    "Organização",
    "Comunicação",
    "Trabalho em equipe",
    "Proatividade",
    "Pontualidade",
    "Aprendizagem rápida",
    "Flexibilidade",
    "Resiliência",
    "Ética profissional",
  ],
  [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Responsividade",
    "Consumo de API",
    "Manipulação de DOM",
    "Versionamento de código",
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
  ],
  [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Responsividade",
    "Consumo de API",
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
  ],
  [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ],
);

console.log("Candidato:", candidato1);
console.log("Candidato:", candidato2);
console.log("Candidato:", candidato3);

//Função para realizar o match entre o candidato e as vagas disponíveis.

const calcularCompatibilidade = (candidato) => {
  vagas.forEach((vaga) => {

    //Compatibilidade HardSkills

    const requisitosIguais = vaga.hardSkills.filter((skill) =>
      candidato.hardSkills.includes(skill)
    );

    const porcentagemHard = Math.round(
      (requisitosIguais.length / vaga.hardSkills.length) * 100
    );

    //Compatibilidade SoftSkills

    const habilidadesIguais = vaga.softSkills.filter((skill) =>
      candidato.softSkills.includes(skill)
    );

    const porcentagemSoft = Math.round(
      (habilidadesIguais.length / vaga.softSkills.length) * 100
    );

    //Habilidades faltantes

    const hardSkillsFaltantes = vaga.hardSkills.filter(
      (skill) => !candidato.hardSkills.includes(skill)
    );

    const softSkillsFaltantes = vaga.softSkills.filter(
      (skill) => !candidato.softSkills.includes(skill)
    );

    //Booleanos de aprovação

    const aprovadoHard =
      porcentagemHard >= vaga.minHardSkills;

    const aprovadoSoft =
      porcentagemSoft >= vaga.minSoftSkills;

    const aprovadoGeral =
      aprovadoHard && aprovadoSoft;

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
  hardSkillsFaltantes.length > 0 ||
  softSkillsFaltantes.length > 0
    ? `Desenvolver ${[
        ...hardSkillsFaltantes,
        ...softSkillsFaltantes,
      ].join(", ")}.`
    : "Perfil completo para esta vaga."
}

========================================
`);
  });
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