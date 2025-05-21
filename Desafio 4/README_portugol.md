# 📚 Cadastro de Alunos

## 📌 Descrição
Este algoritmo realiza o cadastro e controle de alunos de uma turma, trabalhando com **vetores**, **matrizes** e **estruturas de controle** em **Portugol**.

Funcionalidades:
- Registrar alunos e suas notas.
- Calcular médias por avaliação.
- Calcular média individual de cada aluno.
- Definir a situação (Aprovado/Reprovado).
- Listar todos os alunos com seus dados.
- Contar quantos foram aprovados e reprovados.
- Identificar o melhor e o pior aluno da turma.

---

## 👨‍💻 Tecnologias Utilizadas
- **Portugol Studio** (ou qualquer outra ferramenta de interpretação de pseudocódigo).

---

## 🧪 Lógica Implementada

### 1. Entrada de dados
- O usuário informa:
  - Número de alunos (**N**)
  - Número de avaliações (**M**)
- Para cada aluno:
  - Registro (número de matrícula)
  - Nome
  - Notas em cada avaliação

### 2. Processamento
- Somas das notas por avaliação para calcular médias gerais de cada avaliação.
- Cálculo da média individual de cada aluno.
- Definição da situação:
  - Média ≥ 6.0 → Aprovado
  - Média < 6.0 → Reprovado
- Contagem de aprovados e reprovados.
- Identificação do melhor e do pior aluno.

### 3. Saída de dados
- Médias por avaliação.
- Listagem completa dos alunos: registro, nome, média e situação.
- Total de alunos aprovados e reprovados.
- Melhor aluno (nome e média).
- Pior aluno (nome e média).

---

## 🔢 Estruturas de Dados

- `notas` → Matriz linearizada para armazenar notas dos alunos.
- `somaAval` → Vetor para somar as notas de cada avaliação.
- `mediaAval` → Vetor para armazenar as médias das avaliações.
- `registro` → Vetor com os registros dos alunos.
- `nome` → Vetor com os nomes dos alunos.
- `media` → Vetor com as médias individuais dos alunos.
- `situacao` → Vetor com o status ("Aprovado" ou "Reprovado") de cada aluno.

---

## 🔄 Fluxo do Algoritmo

```bash
flowchart TD
    A[Início] --> B[Entrada de N (alunos) e M (avaliações)]
    B --> C[Entrada dos dados de cada aluno]
    C --> D[Cálculo das médias por avaliação]
    D --> E[Cálculo da média de cada aluno]
    E --> F[Definição de Aprovado/Reprovado]
    F --> G[Exibição de Médias por Avaliação]
    G --> H[Listagem de Alunos com Média e Situação]
    H --> I[Contagem de Aprovados e Reprovados]
    I --> J[Identificação do Melhor e Pior Aluno]
    J --> K[Exibição dos Resultados Finais]
    K --> L[Fim]
```

---

## 🧪 Regras e Critérios

- **Aprovado**: Média maior ou igual a 6.0.
- **Reprovado**: Média menor que 6.0.
- Melhor aluno é aquele com **maior média**.
- Pior aluno é aquele com **menor média**.

---

## 📅 Dados do Projeto

- **Nome do Algoritmo**: `cadastroDeAlunos`
- **Função**: Praticar vetores, matrizes e registros em Portugol.
- **Autora**: Carla coder
- **Data de Criação**: 27/04/2025

---

## 🚀 Como Executar

1. Abra o **Portugol Studio** ou outro interpretador compatível.
2. Crie um novo projeto.
3. Copie o código fornecido para o editor.
4. Execute o algoritmo.
5. Siga as instruções no console para digitar os dados.

---

Desenvolvido com ❤️ por Carla.

