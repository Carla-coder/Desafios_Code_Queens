// Validação de Senha - Carla Coder
// Data: 19/04/2025

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nome = '';
let senha = '';
let tentativas = 0;
let acesso = false;

function perguntarNome() {
  rl.question('Digite seu nome: ', (respostaNome) => {
    nome = respostaNome;
    rl.question(`Olá, ${nome}! Crie uma senha: `, (respostaSenha) => {
      senha = respostaSenha;
      validarSenha();
    });
  });
}

function validarSenha() {
  if (tentativas >= 3) {
    console.log("Senha incorreta! Acesso bloqueado. 🔒");
    rl.close();
    return;
  }

  rl.question(`${nome}, digite sua senha: `, (tentativa) => {
    if (tentativa === senha) {
      console.log("Senha correta. Acesso liberado! 🔑");
      acesso = true;
      rl.close();
    } else {
      tentativas++;
      if (tentativas < 3) {
        console.log(`Senha incorreta! Você ainda tem ${3 - tentativas} tentativa(s).`);
        validarSenha();
      } else {
        console.log("Senha incorreta! Acesso bloqueado. 🔒");
        rl.close();
      }
    }
  });
}

perguntarNome();
