Este README detalha o funcionamento da interface web do Desafio 4, um Sistema de Cadastro de Alunos e Análise de Notas. A aplicação permite o cadastro de alunos, suas respectivas notas em diversas avaliações, e calcula automaticamente as médias, situação de cada aluno, além de apresentar estatísticas gerais da turma.

## Funcionalidades

A aplicação web oferece as seguintes funcionalidades:

*   **Definição da Estrutura da Turma:**
    *   Permite ao usuário inserir o número total de alunos (N) a serem cadastrados.
    *   Permite ao usuário definir o número de avaliações (M) que cada aluno realizou.
*   **Nomeação das Avaliações:**
    *   O usuário pode nomear cada uma das M avaliações (ex: "Prova de Matemática", "Trabalho em Grupo", "Seminário").
*   **Cadastro Individual de Alunos:**
    *   Para cada um dos N alunos, o sistema solicita:
        *   Número de registro (matrícula).
        *   Nome completo do aluno.
        *   As M notas correspondentes a cada avaliação definida.
*   **Cálculo e Exibição de Resultados:**
    *   **Média por Avaliação:** Calcula e exibe a média de notas da turma para cada uma das M avaliações.
    *   **Desempenho Individual dos Alunos:** Apresenta uma lista detalhada de cada aluno, incluindo:
        *   Número de registro.
        *   Nome.
        *   Média individual (calculada a partir de suas M notas).
        *   Situação acadêmica: "Aprovado" (média >= 7), "Recuperação" (média >= 5 e < 7) ou "Reprovado" (média < 5).
    *   **Resumo da Turma:** Exibe um resumo quantitativo de quantos alunos foram Aprovados, estão em Recuperação ou foram Reprovados.
    *   **Destaques da Turma:** Identifica e mostra o(s) aluno(s) com a maior média (Melhor Aluno) e o(s) aluno(s) com a menor média (Pior Aluno), tratando corretamente os casos de empate.
*   **Persistência de Dados:**
    *   As informações da turma (número de alunos, avaliações, nomes das matérias e dados dos alunos) são salvas no `localStorage` do navegador. Isso permite que os dados persistam mesmo que o usuário recarregue a página.
    *   Um botão "Limpar Dados" permite remover todas as informações salvas do `localStorage` e reiniciar a aplicação.
*   **Modo Escuro/Claro:**
    *   A interface possui um botão para alternar entre o modo claro (padrão) e o modo escuro, proporcionando maior conforto visual ao usuário.

## Como Utilizar

A aplicação é totalmente executada no lado do cliente (client-side), não necessitando de um servidor backend dedicado.

1.  **Abrir a Aplicação:**
    *   Navegue até o diretório `Desafio 4`.
    *   Abra o arquivo `index.html` em qualquer navegador web moderno (como Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).
2.  **Definir Parâmetros da Turma:**
    *   No formulário inicial, informe o "Número de Alunos (N)" e o "Número de Avaliações (M)".
    *   Clique em "Iniciar Cadastro".
3.  **Nomear as Avaliações:**
    *   Abaixo do formulário inicial, surgirão campos para você nomear cada uma das M avaliações. Preencha os nomes conforme desejado (ex: "Matemática Discreta", "Projeto Integrador").
    *   Clique em "Iniciar Cadastro de Alunos".
4.  **Cadastrar Alunos e Notas:**
    *   Uma seção para "Cadastro de Alunos" será exibida.
    *   Para cada aluno, preencha:
        *   O número de registro.
        *   O nome completo.
        *   As notas para cada uma das M avaliações nomeadas.
    *   Após preencher os dados de todos os N alunos, clique em "Finalizar Cadastro".
5.  **Visualizar Resultados:**
    *   A seção "Resultados" será exibida automaticamente, contendo:
        *   A média da turma por matéria/avaliação.
        *   A lista de todos os alunos com seus detalhes, médias e situação.
        *   O resumo de alunos aprovados, em recuperação e reprovados.
        *   Os alunos destaque (melhor e pior média).
6.  **Persistência e Limpeza de Dados:**
    *   Os dados inseridos são salvos automaticamente no seu navegador. Se você fechar e reabrir o `index.html`, os dados da última sessão serão carregados.
    *   Para apagar todos os dados e começar um novo cadastro, clique no botão "🗑️ Limpar Dados" localizado ao final da seção de resultados.
7.  **Alternar Modo de Visualização:**
    *   No canto superior direito da página, clique no botão "🌙 Modo Escuro" ou "☀️ Modo Claro" para alternar entre os temas.

## Tecnologias Utilizadas

*   **HTML5:** Para a estruturação semântica da página web.
*   **CSS3:** Para estilização da interface, incluindo layout responsivo e o modo escuro/claro.
*   **JavaScript (ES6+):** Para toda a lógica da aplicação, incluindo manipulação do DOM, cálculos, interações com o usuário e persistência de dados no `localStorage`.
*   **Bootstrap 5.3.2:** Framework CSS utilizado para agilizar o desenvolvimento da interface, garantindo responsividade e componentes estilizados (como cards, formulários, botões).
*   **Bootstrap Icons 1.10.5:** Biblioteca de ícones SVG utilizada para melhorar a interface visual.
*   **AOS (Animate On Scroll) Library 2.3.4:** Biblioteca JavaScript utilizada para animações sutis de elementos ao rolar a página.

## Estrutura dos Arquivos (Parte Web)

Dentro do diretório `Desafio 4/`, os arquivos mais relevantes para a parte web são:

*   `index.html`: Contém a estrutura HTML da página, incluindo os formulários de entrada, as áreas para exibição de resultados e a inclusão dos scripts e folhas de estilo necessários.
*   `app.js`: Contém todo o código JavaScript responsável pela lógica da aplicação. Isso inclui:
    *   Manipulação dos eventos dos formulários.
    *   Coleta dos dados inseridos pelo usuário.
    *   Cálculo das médias e definição das situações dos alunos.
    *   Geração dinâmica do conteúdo HTML para exibir os resultados.
    *   Interação com o `localStorage` para salvar e carregar dados.
    *   Funcionalidade do modo escuro/claro.
*   `Print das Telas/`: Este diretório contém imagens (screenshots) da aplicação em funcionamento, que podem ser úteis para visualização rápida de suas funcionalidades e interface.

## Autoria

Desenvolvido por Carla Coder, 2025.
