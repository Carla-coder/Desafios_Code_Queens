// Variáveis globais
let N = 0;
let M = 0;
let nomesMaterias = [];

// Elementos do DOM
const formTurma = document.getElementById("formTurma");
const materiasContainer = document.getElementById("materiasInputs");
const nomesMateriasContainer = document.getElementById(
  "nomesMateriasContainer"
);

// Recupera dados do localStorage ao carregar
window.addEventListener("load", () => {
  const dadosSalvos = localStorage.getItem("dadosTurma");
  if (dadosSalvos) {
    const {
      N: nSalvo,
      M: mSalvo,
      nomesMaterias: materiasSalvas,
      alunos,
    } = JSON.parse(dadosSalvos);
    N = nSalvo;
    M = mSalvo;
    nomesMaterias = materiasSalvas;

    const somaAvaliacoes = Array(M).fill(0);
    alunos.forEach((aluno) => {
      aluno.notas.forEach((nota, j) => {
        somaAvaliacoes[j] += nota;
      });
    });

    exibirResultados(alunos, somaAvaliacoes);
  }
});

formTurma.addEventListener("submit", function (e) {
  e.preventDefault();

  N = parseInt(document.getElementById("numAlunos").value);
  M = parseInt(document.getElementById("numAvaliacoes").value);

  nomesMateriasContainer.classList.remove("d-none");
  materiasContainer.innerHTML = "";

  for (let i = 0; i < M; i++) {
    const divCol = document.createElement("div");
    divCol.className = "col-md-6";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "form-control materia";
    input.placeholder = `Matéria ${i + 1}`;
    input.required = true;

    divCol.appendChild(input);
    materiasContainer.appendChild(divCol);
  }

  const divBotao = document.createElement("div");
  divBotao.className = "col-12 text-center";

  const botaoIniciarCadastro = document.createElement("button");
  botaoIniciarCadastro.type = "button";
  botaoIniciarCadastro.className = "btn btn-primary mt-3";
  botaoIniciarCadastro.textContent = "Iniciar Cadastro de Alunos";
  botaoIniciarCadastro.addEventListener("click", iniciarCadastroDeAlunos);

  divBotao.appendChild(botaoIniciarCadastro);
  materiasContainer.appendChild(divBotao);
});

function iniciarCadastroDeAlunos() {
  const inputsMaterias = document.querySelectorAll(".materia");
  nomesMaterias = [];

  inputsMaterias.forEach((input, i) => {
    nomesMaterias[i] = input.value.trim() || `Avaliação ${i + 1}`;
  });

  const formAlunos = document.getElementById("formAlunos");
  formAlunos.innerHTML = "";

  for (let i = 0; i < N; i++) {
    const alunoDiv = document.createElement("div");
    alunoDiv.classList.add("card", "p-3", "mb-3", "shadow-sm");

    alunoDiv.innerHTML = `
      <h5>Aluno ${i + 1}</h5>
      <div class="mb-3">
        <label class="form-label">Registro:</label>
        <input type="number" class="form-control registro" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Nome:</label>
        <input type="text" class="form-control nome" required>
      </div>
      ${Array.from(
        { length: M },
        (_, j) => `
        <div class="mb-3">
          <label class="form-label">Nota (${nomesMaterias[j]}):</label>
          <input type="number" step="0.01" class="form-control nota nota-${i}-${j}" required placeholder="Nota de 0 a 10">
        </div>`
      ).join("")}
    `;

    formAlunos.appendChild(alunoDiv);
  }

  const botaoFinalizar = document.createElement("button");
  botaoFinalizar.type = "button";
  botaoFinalizar.className = "btn btn-success mt-3";
  botaoFinalizar.textContent = "Finalizar Cadastro";
  botaoFinalizar.addEventListener("click", processarCadastro);

  formAlunos.appendChild(botaoFinalizar);
  document.getElementById("cadastroAlunos").classList.remove("d-none");
}

function processarCadastro() {
  const registros = document.querySelectorAll(".registro");
  const nomes = document.querySelectorAll(".nome");

  const alunos = [];
  const somaAvaliacoes = Array(M).fill(0);

  for (let i = 0; i < N; i++) {
    const aluno = {
      registro: registros[i].value,
      nome: nomes[i].value,
      notas: [],
    };

    let somaNotas = 0;

    for (let j = 0; j < M; j++) {
      const nota = parseFloat(document.querySelector(`.nota-${i}-${j}`).value);
      aluno.notas.push(nota);
      somaNotas += nota;
      somaAvaliacoes[j] += nota;
    }

    aluno.media = somaNotas / M;
    aluno.situacao =
      aluno.media >= 7
        ? "Aprovado"
        : aluno.media >= 5
        ? "Recuperação"
        : "Reprovado";

    alunos.push(aluno);
  }

  // Salva no localStorage
  const dados = {
    N,
    M,
    nomesMaterias,
    alunos,
  };
  localStorage.setItem("dadosTurma", JSON.stringify(dados));

  exibirResultados(alunos, somaAvaliacoes);
}

// Botão para limpar dados do localStorage
const botaoLimpar = document.createElement("button");
botaoLimpar.textContent = "🗑️ Limpar Dados";
botaoLimpar.className = "btn btn-danger mt-2";
botaoLimpar.id = "limparDados";
botaoLimpar.addEventListener("click", () => {
  localStorage.removeItem("dadosTurma");
  location.reload();
});

// Cria um contêiner centralizado do botão
const divCentralizada = document.createElement("div");
divCentralizada.className = "col-12 text-center mt-3";
divCentralizada.appendChild(botaoLimpar);

document.getElementById("resultado").appendChild(divCentralizada);

function exibirResultados(alunos, somaAvaliacoes) {
  document.getElementById("resultado").classList.remove("d-none");

  const mediaAvaliacoes = document.getElementById("mediaAvaliacoes");
  const listaAlunos = document.getElementById("listaAlunos");
  const contagemSituacoes = document.getElementById("contagemSituacoes");
  const melhorPiorAluno = document.getElementById("melhorPiorAluno");

  // Médias por avaliação
  mediaAvaliacoes.innerHTML = mediaAvaliacoes.innerHTML = `
  <div class="result-box">
    <h5><i class="bi bi-bar-chart-line-fill text-info me-2"></i><strong>Média por Matéria:</strong></h5>
    <ul>
      ${nomesMaterias
        .map(
          (nome, i) =>
            `<li><strong>${nome}:</strong> <span class="text-primary">${(
              somaAvaliacoes[i] / N
            ).toFixed(2)}</span></li>`
        )
        .join("")}
    </ul>
  </div>
`;

  // Lista de alunos
  listaAlunos.innerHTML = `
  <div class="result-box">
    <h5><i class="bi bi-person-badge text-secondary me-2"></i><strong>Alunos:</strong></h5>
    <ul>
      ${alunos
        .map((aluno) => {
          const situacaoIcone =
            aluno.situacao === "Aprovado"
              ? '<i class="bi bi-check-circle-fill text-success"></i>'
              : aluno.situacao === "Recuperação"
              ? '<i class="bi bi-exclamation-circle-fill text-warning"></i>'
              : '<i class="bi bi-x-circle-fill text-danger"></i>';

          const situacaoTexto = `<span class="${
            aluno.situacao === "Aprovado"
              ? "text-success"
              : aluno.situacao === "Recuperação"
              ? "text-warning"
              : "text-danger"
          }"><strong>${aluno.situacao}</strong></span>`;

          return `<li>👤 <strong>${aluno.nome}</strong> (${
            aluno.registro
          }) - Média: <strong>${aluno.media.toFixed(
            2
          )}</strong> - Situação: ${situacaoIcone} ${situacaoTexto}</li>`;
        })
        .join("")}
    </ul>
  </div>
`;

  // Contagem por situação
  const situacoes = { Aprovado: 0, Recuperação: 0, Reprovado: 0 };

  alunos.forEach((a) => {
    situacoes[a.situacao]++;
  });

  contagemSituacoes.innerHTML = `
  <div class="result-box">
    <h5>📊 <strong>Resumo:</strong></h5>
    <ul style="list-style: none; padding-left: 0;">
      <li style="color: green;">✔️ <strong>Aprovados:</strong> <strong>${situacoes.Aprovado}</strong></li>
      <li style="color: orange;">🟠 <strong>Recuperação:</strong> <strong>${situacoes.Recuperação}</strong></li>
      <li style="color: red;">❌ <strong>Reprovados:</strong> <strong>${situacoes.Reprovado}</strong></li>
    </ul>
  </div>
`;

  // Melhor e pior aluno com tratamento de empates e exclusão de "piores" quando todos empatam
  const medias = alunos.map((a) => a.media);
  const maiorMedia = Math.max(...medias);
  const menorMedia = Math.min(...medias);

  const melhores = alunos.filter((a) => a.media === maiorMedia);
  const piores = alunos.filter((a) => a.media === menorMedia);

  let destaquesHTML = `
  <div class="result-box">
    <h5 class="mb-3">🏅 <strong>Destaques:</strong></h5>
`;

  // Verifica se todos têm a mesma média (evita falso destaque)
  const todasMediasIguais = medias.every((media) => media === medias[0]);

  // Melhor aluno
  if (!todasMediasIguais) {
    if (melhores.length === 1) {
      const melhor = melhores[0];
      destaquesHTML += `
      <p style="color: green;">
        🏆 <strong>Melhor Aluno:</strong> <strong>${
          melhor.nome
        }</strong> - Média: <strong>${melhor.media.toFixed(2)}</strong>
      </p>`;
    } else {
      destaquesHTML += `
      <p style="color: blue;">
        ⚖️ <strong>Melhores Alunos (empate):</strong> ${melhores
          .map(
            (a) =>
              `<strong>${a.nome}</strong> - Média: <strong>${a.media.toFixed(
                2
              )}</strong>`
          )
          .join("; ")}
      </p>`;
    }
  } else {
    destaquesHTML += `
    <p style="color: gray;">
      ℹ️ <strong>Melhor Aluno:</strong> Não há melhor aluno, pois todos os alunos possuem a mesma média.
    </p>`;
  }

  // Pior aluno
  if (alunos.length === 1) {
    destaquesHTML += `
    <p style="color: gray;">
      ℹ️ <strong>Pior Aluno:</strong> Não há pior aluno, pois apenas um aluno foi cadastrado.
    </p>`;
  } else if (todasMediasIguais) {
    destaquesHTML += `
    <p style="color: gray;">
      ℹ️ <strong>Pior Aluno:</strong> Não há pior aluno, pois todos os alunos possuem a mesma média.
    </p>`;
  } else if (piores.length === 1) {
    const pior = piores[0];
    destaquesHTML += `
    <p style="color: red;">
      ⚠️ <strong>Pior Aluno:</strong> <strong>${
        pior.nome
      }</strong> - Média: <strong>${pior.media.toFixed(2)}</strong>
    </p>`;
  } else {
    destaquesHTML += `
    <p style="color: red;">
      ⚠️ <strong>Piores Alunos (empate):</strong> ${piores
        .map(
          (a) =>
            `<strong>${a.nome}</strong> - Média: <strong>${a.media.toFixed(
              2
            )}</strong>`
        )
        .join("; ")}
    </p>`;
  }

  destaquesHTML += `
  </div>`;

  // Insere no HTML
  melhorPiorAluno.innerHTML = destaquesHTML;
}

// Botão Modo Claro/Escuro
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleDarkMode');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    const isDark = body.classList.contains('bg-dark');

    if (isDark) {
      // Mudar para modo claro
      body.classList.remove('bg-dark');
      body.classList.add('bg-light');
      toggleButton.textContent = '🌙 Modo Escuro';

      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('bg-dark');
      });
    } else {
      // Mudar para modo escuro
      body.classList.remove('bg-light');
      body.classList.add('bg-dark');
      toggleButton.textContent = '☀️ Modo Claro';

      document.querySelectorAll('.card').forEach(card => {
        card.classList.add('bg-dark');
      });
    }
  });
});