# 📚 Cadastro de Alunos e Análise de Notas - Node.js

**Desafio #4 - Projeto desenvolvido por Carla**  
**Data:** 27/04/2025

## ✨ Descrição

Este projeto é um sistema de **cadastro de alunos** com análise de **notas** e **situação acadêmica**. Foi desenvolvido em **Node.js**, utilizando o módulo `readline-sync` para realizar entradas de dados diretamente pelo terminal.

O sistema permite:
- Cadastro de alunos (registro e nome)
- Registro de notas por avaliação
- Cálculo da média das avaliações
- Cálculo da média de cada aluno
- Determinação de situação (Aprovado/Reprovado)
- Contagem de aprovados e reprovados
- Identificação do melhor e pior aluno da turma

---

## 📦 Instalação e Execução

1. **Clone o repositório** ou copie o arquivo `cadastroDeAlunos.js`.

2. **Instale a dependência `readline-sync`:**
   ```bash
   npm install readline-sync
   ```

3. **Execute o projeto:**
   ```bash
   node cadastroDeAlunos.js
   ```

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript no lado do servidor
- **readline-sync** — Biblioteca para entrada de dados de forma síncrona via terminal

---

## 📋 Explicação do funcionamento

- **readline-sync:**  
  Utilizamos `readline-sync` para capturar entradas do usuário de forma **síncrona** no terminal, sem precisar trabalhar com callbacks ou Promises, o que facilita bastante para projetos simples ou acadêmicos.

Exemplos no código:
```javascript
const nome = readlineSync.question("Digite o nome do aluno: ");
const nota = parseFloat(readlineSync.question("Digite a nota: "));
```

- **Estrutura de dados:**
  - `Aluno` (classe): estrutura que representa um aluno, com registro, nome, média e situação.
  - `notas`: matriz onde cada linha representa um aluno e cada coluna uma avaliação.
  - `somaAval`: vetor que armazena a soma das notas de cada avaliação para cálculo da média da avaliação.

- **Fluxo principal:**
  1. Pergunta o número de alunos (N) e avaliações (M).
  2. Para cada aluno:
     - Cadastra registro e nome.
     - Coleta notas de todas as avaliações.
  3. Calcula:
     - Média de cada avaliação.
     - Média de cada aluno.
     - Situação (Aprovado ou Reprovado).
  4. Exibe:
     - Médias das avaliações.
     - Informações de cada aluno.
     - Quantidade de aprovados e reprovados.
     - Melhor e pior aluno da turma.

---

## 🧬 Organização do Código

| Função | Responsabilidade |
| :--- | :--- |
| `cadastrarAlunos(N, M)` | Cadastra os alunos e suas notas |
| `calcularMediaAvaliacoes(somaAval, N)` | Calcula a média de cada avaliação |
| `calcularMediaSituacao(alunos, notas, M)` | Calcula a média final dos alunos e define a situação |
| `contarSituacoes(alunos)` | Conta quantos alunos foram aprovados e reprovados |
| `encontrarMelhorEPiorAluno(alunos)` | Identifica o melhor e o pior aluno |
| `main()` | Função principal que gerencia o fluxo do sistema |

---

## ⚡ Exemplo de Uso

```bash
Digite o número de alunos da turma (N): 2
Digite o número de avaliações por aluno (M): 3

Digite o registro do aluno 1: 101
Digite o nome do aluno 1: Ana
Digite a nota 1 do aluno Ana: 8.5
Digite a nota 2 do aluno Ana: 7.0
Digite a nota 3 do aluno Ana: 9.0

Digite o registro do aluno 2: 102
Digite o nome do aluno 2: João
Digite a nota 1 do aluno João: 5.0
Digite a nota 2 do aluno João: 6.0
Digite a nota 3 do aluno João: 5.5

Médias por avaliação:
Avaliação 1: 6.75
Avaliação 2: 6.50
Avaliação 3: 7.25

Lista de alunos:
Registro: 101
Nome: Ana
Média: 8.17
Situação: Aprovado
---
Registro: 102
Nome: João
Média: 5.50
Situação: Reprovado
---

Número de alunos aprovados: 1
Número de alunos reprovados: 1

Melhor aluno: Ana com média 8.17
Pior aluno: João com média 5.50
```

---

## ❓ Sobre o readline-sync

- `readline-sync` permite que você **capture inputs diretamente do usuário** enquanto o programa está rodando, **sem usar callbacks**.
- É ideal para projetos pequenos, testes, protótipos e aplicações que não precisam de interfaces gráficas.
- Instalação:
  ```bash
  npm install readline-sync
  ```
- Funções principais:
  - `readlineSync.question(pergunta)` — Faz uma pergunta e lê o input como `string`.
  - `parseInt()` e `parseFloat()` — Usadas para converter o input em `inteiro` ou `real`, respectivamente.

---

## 📜 Licença

Projeto desenvolvido para fins de estudo e prática de programação em **Node.js**.

---

 [![Feito por Carla](https://img.shields.io/badge/Feito%20por-Carla%20Coder-purple?style=for-the-badge)](#)