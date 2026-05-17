//Criação do mini-projeto avaliativo para o curso de desenvolvedor Frontend React do SCTEC | SENAI
// SoftSkills e HardSkills para vagas em geral em FrontEnd que serão selecionadas pela empresa.

class SoftSkills {
  constructor() {
    this.softSkillsTecnologia = [
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
      "Disciplina",
      "Inovação"
    ];
  }
}

class HardSkills {
  constructor() {
    this.hardSkillsTecnologia = [
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
      "Banco de Dados",
      "SQL",
      "Firebase",
      "Debugging",
      "VS Code",
      "Terminal Linux",
      "NPM",
      "Deploy",
      "Arquitetura cliente-servidor",
      "Kanban",
      "Testes básicos"
    ];
  }
}

//Criação da classe FrontendJunior que herda as SoftSkills para o cargo de FrontEnd Junior.

class FrontendJunior extends SoftSkills {
  constructor() {
    super();

    this.softSkills = [
      "Responsabilidade",
      "Organização",
      "Comunicação",
      "Trabalho em equipe",
      "Proatividade",
      "Pontualidade",
      "Aprendizagem rápida",
      "Flexibilidade",
      "Resiliência",
      "Ética profissional"
    ];

    this.hardSkills = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "GitHub",
      "Responsividade",
      "Consumo de API",
      "Manipulação de DOM",
      "Versionamento de código"
    ];
  }
}

const frontendJunior = new FrontendJunior();

console.log("Frontend Junior:", frontendJunior);

//Criação da classe Vaga que receberá as informações da vaga e do candidato para realizar o match.

class Vaga {
  constructor(empresa, cargo, habilidades, requisitos, salario, modalidade, nivel) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.softSkills = habilidades;
    this.hardSkills = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
    this.nivel = nivel;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, habilidades, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, habilidades, requisitos, salario, modalidade, nivel);
    this.area = "Front-End";
  }
}

//Criação de uma vaga de FrontEnd Junior para realizar o match com o candidato. 
//Usei as mesmas habilidades e requisitos do FrontEnd Junior para criar vagas com diferentes habilidades e requisitos para testar o match perfeito,  parcial ou sem match.

const vagaFrontEnd = new VagaFrontEnd(
  "Tech Company",
  "Frontend Developer Junior",
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
    "Ética profissional"
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
    "Versionamento de código"
  ],
  3000,
  "Remoto",
  "Junior"
);

console.log("Vaga Front-End:", vagaFrontEnd);

//Construí usando const para ilustrar a criação de uma vaga específica, 
//mas é possível criar várias vagas com diferentes informações para testar 
//o match com diferentes candidatos.

//Agora irei construir as vagas com arrays para armazenar várias vagas e candidatos, 
//e criar funções para realizar o match entre eles.

const vagas = [];

vagas.push(vagaFrontEnd);

vagas.push(
  new VagaFrontEnd(
    "Empresa A",
    "Frontend Developer Junior",
    [
      "Responsabilidade",
      "Organização",
      "Comunicação",
      "Trabalho em equipe",
      "Proatividade",
      "Pontualidade",
      "Aprendizagem rápida"
    ],
    [
      "JavaScript",
      "React",
      "Git",
      "GitHub",
      "Responsividade",
      "Manipulação de DOM",
      "Versionamento de código"
    ],
    3500,
    "Híbrido",
    "Junior"
  )
);

vagas.push(
  new VagaFrontEnd(
    "Empresa B",
    "Frontend Developer Junior",
    [
      "Responsabilidade",
      "Comunicação",
      "Trabalho em equipe",
      "Proatividade",
      "Aprendizagem rápida",
      "Flexibilidade",
      "Ética profissional"
    ],
    [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "Responsividade",
      "Consumo de API"
    ],
    3200,
    "Presencial",
    "Junior"
  )
);

vagas.push(
  new VagaFrontEnd(
    "Empresa C",
    "Frontend Developer Junior",
    [
      "Organização",
      "Comunicação",
      "Proatividade",
      "Pontualidade",
      "Aprendizagem rápida",
      "Flexibilidade",
      "Resiliência",
      "Ética profissional"
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
      "Versionamento de código"
    ],
    2800,
    "Remoto",
    "Junior"
  )
);

console.log("Vagas Disponíveis:", vagas);

//Criação da classe Candidato que receberá as informações do candidato para realizar o match.

class CandidatoFrontEnd extends FrontendJunior {
  constructor(nome, email, telefone, habilidades, requisitos) {
    super();

    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.softSkills = habilidades;
    this.hardSkills = requisitos;

    if (this.softSkills.every(skill => frontendJunior.softSkills.includes(skill))) {
      this.matchSoftSkills = true;
    } else {
      this.matchSoftSkills = false;
    }

    if (this.hardSkills.every(skill => frontendJunior.hardSkills.includes(skill))) {
      this.matchHardSkills = true;
    } else {
      this.matchHardSkills = false;
    }
  }
}

//Criação de candidatos fictícios para o console.log.
//Algumas das mesmas habilidades e requisitos do FrontEnd Junior.
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
    "Ética profissional"
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
    "Versionamento de código"
  ]
);

console.log("Candidato:", candidato1);

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
    "Ética profissional"
  ],
  [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Responsividade",
    "Consumo de API"
  ]
);

console.log("Candidato:", candidato2);

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
    "Resiliência"
  ],
  [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ]
);

console.log("Candidato:", candidato3);

//Função para realizar o match entre o candidato e as vagas disponíveis.

const calcularCompatibilidade = (candidato) => {
  vagas.forEach(vaga => {

    const habilidadesIguais = vaga.hardSkills.filter(skill =>
      candidato.hardSkills.includes(skill)
    );

    const porcentagem =
      (habilidadesIguais.length / vaga.hardSkills.length) * 100;

    console.log(
      `${candidato.nome} possui ${porcentagem}% de compatibilidade com a empresa ${vaga.empresa}`
    );

  });
};