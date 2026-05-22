# SkillMatch JS 😄

Mini-projeto avaliativo desenvolvido para o curso  
**Desenvolvedor Frontend React - SENAI / SCTEC**

---

## Sobre o projeto

O **SkillMatch JS** é um sistema feito em JavaScript puro para calcular a compatibilidade entre candidatos e vagas de **Frontend Developer Junior**.

A ideia do projeto é simular um processo simples de seleção, comparando as habilidades exigidas por uma vaga com as habilidades cadastradas em cada candidato.

O sistema compara:

- HardSkills;
- SoftSkills;
- percentual de compatibilidade;
- regras mínimas de aprovação;
- habilidades encontradas;
- habilidades faltantes;
- melhor vaga para cada candidato.

No final, o sistema mostra no console um relatório de cada análise e também indica qual foi o melhor match encontrado para cada candidato.

---

## Objetivo do projeto

O objetivo principal foi praticar conceitos de JavaScript estudados no curso, usando uma ideia mais próxima de um sistema real.

Neste projeto foram aplicados conceitos como:

- Programação Orientada a Objetos;
- classes;
- herança;
- métodos dentro das classes;
- arrays;
- objetos;
- métodos de array;
- callback;
- closure;
- Promise;
- async/await;
- lógica condicional;
- cálculo de porcentagem;
- uso do console para exibir os resultados.

---

## Funcionalidades

✅ Cadastro de vagas fictícias  
✅ Cadastro de candidatos fictícios  
✅ Comparação entre HardSkills e SoftSkills  
✅ Cálculo percentual de compatibilidade  
✅ Verificação de habilidades obrigatórias com `every()`  
✅ Classificação de compatibilidade  
✅ Regras de aprovação por vaga  
✅ Relatório com habilidades faltantes  
✅ Indicação da melhor vaga com `reduce()`  
✅ Simulação de carregamento com `Promise`  
✅ Execução assíncrona com `async/await`  
✅ Mensagem final usando `callback`  
✅ Contador de análises usando `closure`

---

## Conceitos aplicados

### Classes e métodos

O projeto utiliza classes para organizar melhor os dados das vagas e dos candidatos.

A classe `Vaga` possui métodos como:

- `resumoVaga()`;
- `detalhesVaga()`.

A classe `Pessoa` possui o método:

- `resumoPessoa()`.

A classe `CandidatoFrontEnd` possui o método:

- `resumoCandidato()`.

Esses métodos foram criados para evitar repetição de código e facilitar a exibição das informações no console.

---

### Herança

Foi criada uma classe base chamada `Pessoa`, com informações comuns como nome, e-mail e telefone.

Depois, a classe `CandidatoFrontEnd` herda de `Pessoa`, usando `extends` e `super()`.

Isso mostra que o candidato também é uma pessoa, mas possui informações específicas, como HardSkills e SoftSkills.

---

### Métodos de array

O projeto utiliza vários métodos de array, entre eles:

- `push()` para adicionar vagas ao array;
- `forEach()` para exibir informações;
- `map()` para gerar análises para todos os candidatos;
- `filter()` para encontrar habilidades iguais ou faltantes;
- `every()` para verificar se o candidato possui a base obrigatória de Frontend;
- `reduce()` para encontrar a melhor vaga de cada candidato.

---

### Callback

Foi utilizada uma função com callback para calcular o percentual de compatibilidade.

A função calcula o percentual e depois entrega o resultado para outra função decidir como esse resultado será organizado.

Também foi usado callback na função final do sistema, para exibir a mensagem de encerramento.

---

### Closure

O projeto utiliza closure em dois momentos:

1. Para criar um contador de análises, mantendo o número total de análises realizadas.
2. Para criar regras de aprovação, onde a função interna lembra qual é a porcentagem mínima exigida.

---

### Promise e async/await

Foi criada uma `Promise` para simular o carregamento das vagas.

Depois, o sistema usa `async/await` para aguardar esse carregamento antes de executar as análises.

---

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/andrea7070mierzwa/skillmatch-js.git

Acesse a pasta do projeto:

cd skillmatch-js

Execute o sistema com Node.js:

node skillmatch.js
Exemplo de resultado esperado

Ao executar o projeto, o terminal exibirá:

as vagas disponíveis;
os candidatos cadastrados;
a análise de compatibilidade de cada candidato com cada vaga;
percentual de HardSkills;
percentual de SoftSkills;
habilidades faltantes;
status de aprovação;
melhor match para cada candidato;
resumo geral dos melhores matches.
Estrutura do projeto
skillmatch-js/
│
├── skillmatch.js
└── README.md
Diário de bordo do caos organizado 😂

Este projeto começou simples.

Depois teve:

herança desnecessária;
arrays redundantes;
classes que nasceram e morreram no mesmo dia;
variáveis em lugares duvidosos;
um pequeno surto coletivo com o terminal Linux;
e alguns momentos de:

“daqui a pouco não tenho mais código”

😅

No processo, descobri que:

menos código às vezes é melhor;
arquitetura bonita demais pode virar decoração;
método dentro da classe ajuda a não repetir texto;
callback parece assustador, mas no fim é uma função chamando outra;
closure é quase uma memória particular da função;
GitHub gosta de brincar de esconde-esconde;
e o terminal definitivamente não foi feito pensando em seres humanos emocionalmente estáveis.
Tecnologias utilizadas
JavaScript
Node.js
Git
GitHub
VS Code
Autora

Andrea Mierzwa 🚀