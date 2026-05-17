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
  constructor(empresa, cargo, habilidades, requisitos, salario, modalidade, nivel, minSoftSkills, minHardSkills) {
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

class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, habilidades, requisitos, salario, modalidade, nivel, minSoftSkills, minHardSkills) {
    super(empresa, cargo, habilidades, requisitos, salario, modalidade, nivel, minSoftSkills, minHardSkills);
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
  "Junior",
  80,
  70
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
    "Junior",
    80,
    70
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
    "Junior",
    75,
    65
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
    "Junior",
    60,
    60
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

    //Compatibilidade HardSkills

    const requisitosIguais = vaga.hardSkills.filter(skill =>
      candidato.hardSkills.includes(skill)
    );

    const porcentagemHard =
      Math.round((requisitosIguais.length / vaga.hardSkills.length) * 100);

      const aprovadoHard = porcentagemHard >= 70 ? true : false;

    console.log(
      `${candidato.nome} possui ${porcentagemHard}% de compatibilidade em HardSkills com a empresa ${vaga.empresa}, candidato ${aprovadoHard ? "aprovado" : "reprovado"} para a entrevista da vaga de ${vaga.cargo}`
    );



    //Compatibilidade SoftSkills

    const habilidadesIguais = vaga.softSkills.filter(skill =>
      candidato.softSkills.includes(skill)
    );

    const porcentagemSoft =
      Math.round((habilidadesIguais.length / vaga.softSkills.length) * 100);

      const aprovadoSoft = porcentagemSoft >= 70 ? true : false;

    console.log(
      `${candidato.nome} possui ${porcentagemSoft}% de compatibilidade em SoftSkills com a empresa ${vaga.empresa}, candidato ${aprovadoSoft ? "aprovado" : "reprovado"} para a entrevista da vaga de ${vaga.cargo}`
    );

  });

  //Classificação e Recomendações para o candidato e empresa com base na compatibilidade calculada.
  
  const hardSkillsFaltantes = vaga.hardSkills.filter(skill =>
  !candidato.hardSkills.includes(skill)
);

const softSkillsFaltantes = vaga.softSkills.filter(skill =>
  !candidato.softSkills.includes(skill)
);

console.log(
  `Para a empresa: ${candidato.nome} tem ${porcentagemHard}% em HardSkills e ${porcentagemSoft}% em SoftSkills. Faltam HardSkills: ${hardSkillsFaltantes.join(", ")}. Faltam SoftSkills: ${softSkillsFaltantes.join(", ")}.`
);

console.log(
  `Feedback ao candidato: desenvolva ${hardSkillsFaltantes.join(", ")} para aumentar sua compatibilidade com a vaga ${vaga.cargo}.`
);

};

calcularCompatibilidade(candidato1);
calcularCompatibilidade(candidato2);
calcularCompatibilidade(candidato3);



  


