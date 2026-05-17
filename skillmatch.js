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

    ["Adaptabilidade", 
      "Liderança", 
      "Inteligência emocional"
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
    ["Ética profissional", "Comprometimento", "Aprendizagem contínua"],
    ["Consumo de API", "Async/Await", "Promises"],
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
    ["Pensamento crítico", "Criatividade", "Resolução de problemas"],
    ["Terminal Linux", "NPM", "Deploy", "Arquitetura cliente-servidor"],
    2800,
    "Remoto",
    "Junior",
    60,
    60,
  ),
);

console.log("Vagas Disponíveis:", vagas);

//Criação da classe Candidato que receberá as informações do candidato para realizar o match.

class CandidatoFrontEnd {
  constructor(nome, email, telefone, habilidades, requisitos) {
    
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.softSkills = habilidades;
    this.hardSkills = requisitos;

    if (
      this.softSkills.every((skill) =>
        vagas.softSkills.includes(skill),
      )
    ) {
      this.matchSoftSkills = true;
    } else {
      this.matchSoftSkills = false;
    }

    if (
      this.hardSkills.every((skill) =>
        vagas.hardSkills.includes(skill),
      )
    ) {
      this.matchHardSkills = true;
    } else {
      this.matchHardSkills = false;
    }
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
    "Resiliência",
  ],
  ["HTML", "CSS", "JavaScript", "React"],
);

console.log("Candidato:", candidato3);

//Função para realizar o match entre o candidato e as vagas disponíveis.

const calcularCompatibilidade = (candidato) => {
  vagas.forEach((vaga) => {
    //Compatibilidade HardSkills

    const requisitosIguais = vaga.hardSkills.filter((skill) =>
      candidato.hardSkills.includes(skill),
    );

    const porcentagemHard = Math.round(
      (requisitosIguais.length / vaga.hardSkills.length) * 100,
    );

    const aprovadoHard = porcentagemHard >= 70 ? true : false;

    console.log(
      `${candidato.nome} possui ${porcentagemHard}% de compatibilidade em HardSkills com a empresa ${vaga.empresa}, candidato ${aprovadoHard ? "aprovado" : "reprovado"} para a entrevista da vaga de ${vaga.cargo}`,
    );

    //Classificação e Recomendações para o candidato e empresa com base na compatibilidade calculada.

   

  

     const hardSkillsFaltantes = vaga.hardSkills.filter(
      (skill) => !candidato.hardSkills.includes(skill),
    );

    console.log(
      `Para a empresa: ${candidato.nome} tem ${porcentagemHard}% em HardSkills e ${porcentagemSoft}% em SoftSkills. Faltam HardSkills: ${hardSkillsFaltantes.join(", ")}. Faltam SoftSkills: ${softSkillsFaltantes.join(", ")}.`,
    );

    console.log(
      `Feedback ao candidato: desenvolva ${hardSkillsFaltantes.join(", ")} para aumentar sua compatibilidade com a vaga ${vaga.cargo}.`,
    );

    //Compatibilidade SoftSkills

    const habilidadesIguais = vaga.softSkills.filter((skill) =>
      candidato.softSkills.includes(skill),
    );

    const porcentagemSoft = Math.round(
      (habilidadesIguais.length / vaga.softSkills.length) * 100,
    );

    const aprovadoSoft = porcentagemSoft >= 70 ? true : false;

      const softSkillsFaltantes = vaga.softSkills.filter(
      (skill) => !candidato.softSkills.includes(skill),
    );

    console.log(
      `Para a empresA: ${candidato.nome} possui ${porcentagemSoft}% de compatibilidade em SoftSkills com a empresa ${vaga.empresa}, candidato ${aprovadoSoft ? "aprovado" : "reprovado"} para a entrevista da vaga de ${vaga.cargo}`,
    );

    console.log(
      `Feedback ao candidato: desenvolva ${softSkillsFaltantes.join(", ")} para aumentar sua compatibilidade com a vaga ${vaga.cargo}.`,
    );
  });
};

calcularCompatibilidade(candidato1);
calcularCompatibilidade(candidato2);
calcularCompatibilidade(candidato3);
