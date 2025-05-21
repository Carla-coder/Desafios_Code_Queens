# 🔐 Validação de Senha testando no terminal com Node.js

Este é um pequeno projeto de **lógica de programação em JavaScript**, desenvolvido por **Carla Coder**, que simula a **validação de senha com limite de tentativas**, agora adaptado para ser executado no terminal usando o módulo `readline` do Node.js.

---

## 🎯 Objetivo

- Solicitar o nome do usuário.
- Solicitar a criação de uma senha.
- Pedir a senha novamente para validar.
- Liberar o acesso caso a senha esteja correta.
- Bloquear o acesso após 3 tentativas incorretas.

---

## 🧲 Como testar no terminal

### ✅ Pré-requisitos

- Ter o **Node.js** instalado na sua máquina.
  - Para instalar, acesse: [https://nodejs.org/](https://nodejs.org/)

---

### 🚀 Passos para executar

1. **Crie um arquivo** com o nome `validarSenha.js` e cole o seguinte código:

```javascript
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
```

2. **Abra o terminal**, navegue até a pasta onde o arquivo foi salvo e execute o comando:

```bash
node validarSenha.js
```

3. **Siga as instruções interativas** no terminal para testar o fluxo completo de criação e validação de senha.

---

## 📦 Exemplo de Saída

```
Digite seu nome: Carla
Olá, Carla! Crie uma senha: 1234
Carla, digite sua senha: 4321
Senha incorreta! Você ainda tem 2 tentativa(s).
Carla, digite sua senha: 0000
Senha incorreta! Você ainda tem 1 tentativa(s).
Carla, digite sua senha: 1234
Senha correta. Acesso liberado! 🔑
```

---

## 💖 Observações

- A senha criada é armazenada apenas temporariamente na **memória local** da aplicação, **não é enviada para servidores nem armazenada em arquivos**.
- Este projeto é uma ótima prática para iniciantes entenderem como funciona **entrada/saída de dados no terminal** e o uso de **estruturas condicionais e de repetição**.

---

## ✨ Autoria

Projeto criado por **Carla Coder** como exercício prático de lógica de programação com JavaScript no terminal.

