// O prompt() não funciona no Node.js, porque ele é feito pra navegador.

// // 1️⃣ Entrada de dados
// const nome = prompt("Digite o nome do aluno:");
// const idade = parseInt(prompt("Digite a idade do aluno:")); // Converte string para número inteiro
// const nota1 = parseFloat(prompt("Digite a primeira nota:")); // Converte string para número real (float)
// const nota2 = parseFloat(prompt("Digite a segunda nota:"));
// const nota3 = parseFloat(prompt("Digite a terceira nota:"));

// // 2️⃣ Processamento
// const media = (nota1 + nota2 + nota3) / 3; // Fórmula da média das 3 notas

// // 3️⃣ Decisão
// const foiAprovado = media >= 7; // Resultado booleano: true (aprovado) ou false (reprovado)

// // 4️⃣ Saída de dados com mensagem personalizada
// console.log("📚 Resultado do Cadastro de Aluno:");
// console.log("Nome: " + nome);
// console.log("Idade: " + idade + " anos");
// console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
// console.log("Média: " + media.toFixed(2)); // Arredonda para 2 casas decimais

// if (foiAprovado) {
//   console.log("Situação: Aprovado 🎉");
// } else {
//   console.log("Situação: Reprovado 😢");
// }


// Use o pacote readline do Node.js para receber entradas do usuário!
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o nome do aluno: ", function(nome) {
  rl.question("Digite a idade do aluno: ", function(idade) {
    rl.question("Digite a primeira nota: ", function(n1) {
      rl.question("Digite a segunda nota: ", function(n2) {
        rl.question("Digite a terceira nota: ", function(n3) {
          const nota1 = parseFloat(n1);
          const nota2 = parseFloat(n2);
          const nota3 = parseFloat(n3);
          const media = (nota1 + nota2 + nota3) / 3;
          const aprovado = media >= 7;

          console.log("\n📚 Resultado do Aluno:");
          console.log("Nome:", nome);
          console.log("Idade:", idade);
          console.log("Notas:", nota1, nota2, nota3);
          console.log("Média:", media.toFixed(2));
          console.log(aprovado ? "Situação: Aprovado 🎉" : "Situação: Reprovado 😢");

          rl.close();
        });
      });
    });
  });
});
