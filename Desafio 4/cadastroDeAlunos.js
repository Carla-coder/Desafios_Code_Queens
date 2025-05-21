// cadastroDeAlunos.js
// Desafio #4 - Cadastro de Alunos e Análise de Notas (Node.js)
// Desenvolvido por Carla

const readlineSync = require('readline-sync');

// Struct Aluno
class Aluno {
  constructor(registro, nome) {
    this.registro = registro;
    this.nome = nome;
    this.media = 0;
    this.situacao = '';
  }
}

function cadastrarAlunos(N, M) {
  const alunos = [];
  const notas = Array.from({ length: N }, () => Array(M).fill(0));
  const somaAval = Array(M).fill(0);

  for (let i = 0; i < N; i++) {
    const registro = parseInt(readlineSync.question(`Digite o registro do aluno ${i + 1}: `));
    const nome = readlineSync.question(`Digite o nome do aluno ${i + 1}: `);
    const aluno = new Aluno(registro, nome);

    for (let j = 0; j < M; j++) {
      const nota = parseFloat(readlineSync.question(`Digite a nota ${j + 1} do aluno ${nome}: `));
      notas[i][j] = nota;
      somaAval[j] += nota;
    }

    alunos.push(aluno);
  }

  return { alunos, notas, somaAval };
}

function calcularMediaAvaliacoes(somaAval, N) {
  return somaAval.map(soma => soma / N);
}

function calcularMediaSituacao(alunos, notas, M) {
  for (let i = 0; i < alunos.length; i++) {
    const somaNotas = notas[i].reduce((acc, nota) => acc + nota, 0);
    const media = somaNotas / M;
    alunos[i].media = media;
    alunos[i].situacao = media >= 6.0 ? 'Aprovado' : 'Reprovado';
  }
}

function contarSituacoes(alunos) {
  let aprovados = 0;
  let reprovados = 0;

  alunos.forEach(aluno => {
    if (aluno.situacao === 'Aprovado') {
      aprovados++;
    } else {
      reprovados++;
    }
  });

  return { aprovados, reprovados };
}

function encontrarMelhorEPiorAluno(alunos) {
  let melhorAluno = alunos[0];
  let piorAluno = alunos[0];

  for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].media > melhorAluno.media) {
      melhorAluno = alunos[i];
    }
    if (alunos[i].media < piorAluno.media) {
      piorAluno = alunos[i];
    }
  }

  return { melhorAluno, piorAluno };
}

function main() {
  const N = parseInt(readlineSync.question("Digite o número de alunos da turma (N): "));
  const M = parseInt(readlineSync.question("Digite o número de avaliações por aluno (M): "));

  const { alunos, notas, somaAval } = cadastrarAlunos(N, M);

  const mediaAval = calcularMediaAvaliacoes(somaAval, N);
  calcularMediaSituacao(alunos, notas, M);

  console.log("\nMédias por avaliação:");
  mediaAval.forEach((media, index) => {
    console.log(`Avaliação ${index + 1}: ${media.toFixed(2)}`);
  });

  console.log("\nLista de alunos:");
  alunos.forEach(aluno => {
    console.log(`Registro: ${aluno.registro}`);
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Média: ${aluno.media.toFixed(2)}`);
    console.log(`Situação: ${aluno.situacao}`);
    console.log('---');
  });

  const { aprovados, reprovados } = contarSituacoes(alunos);
  console.log(`\nNúmero de alunos aprovados: ${aprovados}`);
  console.log(`Número de alunos reprovados: ${reprovados}`);

  const { melhorAluno, piorAluno } = encontrarMelhorEPiorAluno(alunos);
  console.log(`\nMelhor aluno: ${melhorAluno.nome} com média ${melhorAluno.media.toFixed(2)}`);
  console.log(`Pior aluno: ${piorAluno.nome} com média ${piorAluno.media.toFixed(2)}`);
}

// Executa o programa
main();
