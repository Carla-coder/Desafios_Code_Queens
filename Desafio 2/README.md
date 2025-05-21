# ✅ 1. OBJETIVO DO DESAFIO

Você precisa fazer um pequeno sistema que:
- Recebe o **nome**, **idade** e **três notas de um aluno**.
- Calcula a **média** dessas notas
- Verifica se a média é **maior** ou **igual a 7**.
- Exibe tudo o que foi informado + uma mensagem de **Aprovado 🎉** ou **Reprovado 😢**.

# 🧠 LÓGICA GERAL

Vamos dividir esse código em 4 partes:

- Entrada de dados (receber nome, idade e notas)
- Processamento (calcular média e verificar aprovação)
- Decisão (se foi aprovado ou não)
- Saída (mostrar tudo na tela com mensagem personalizada)

# 💻 CÓDIGO COM EXPLICAÇÃO PASSO A PASSO

```bash
// 1️⃣ Entrada de dados

const nome = prompt("Digite o nome do aluno:");
const idade = parseInt(prompt("Digite a idade do aluno:")); // Converte string para número inteiro
const nota1 = parseFloat(prompt("Digite a primeira nota:")); // Converte string para número real (float)
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

// 2️⃣ Processamento

const media = (nota1 + nota2 + nota3) / 3; // Fórmula da média das 3 notas

// 3️⃣ Decisão

const foiAprovado = media >= 7; // Resultado booleano: true (aprovado) ou false (reprovado)

// 4️⃣ Saída de dados com mensagem personalizada

console.log("📚 Resultado do Cadastro de Aluno:");
console.log("Nome: " + nome);
console.log("Idade: " + idade + " anos");
console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
console.log("Média: " + media.toFixed(2)); // Arredonda para 2 casas decimais

if (foiAprovado) {
  console.log("Situação: Aprovado 🎉");
} else {
  console.log("Situação: Reprovado 😢");
}
```

# 🧩 EXPLICAÇÃO DETALHADA DE CADA PARTE

```bash
🟦 Entrada de dados

const nome = prompt("Digite o nome do aluno:");

- prompt() é uma função que mostra uma caixinha para o usuário digitar algo.

- Aqui, o usuário digita o nome e essa informação fica guardada na variável nome.
```
```bash
const idade = parseInt(prompt("Digite a idade do aluno:"));

- O prompt sempre retorna um texto (string), mesmo que você digite um número.

- parseInt() converte esse texto para um número inteiro, ideal para idade.
```

```bash
const nota1 = parseFloat(prompt("Digite a primeira nota:"));

- parseFloat() converte o texto em um número com casas decimais.

- Isso é importante porque notas podem ser, por exemplo, 7.5 ou 8.25.
```

# 🟨 Processamento

```bash
const media = (nota1 + nota2 + nota3) / 3;

- Calculamos a média da forma tradicional: soma tudo e divide por 3.
```

# 🟩 Decisão

```bash
const foiAprovado = media >= 7;

- Isso retorna true se a média for maior ou igual a 7, e false caso contrário.

- A variável foiAprovado é do tipo booleano (verdadeiro ou falso).
```

# 🟪 Saída

```bash
console.log("📚 Resultado do Cadastro de Aluno:");

- console.log() serve pra mostrar mensagens no console (útil pra testes e exibição).
```

```bash
console.log("Média: " + media.toFixed(2));

- .toFixed(2) arredonda a média para duas casas decimais, tipo: 7.33 ou 6.75.
```

```bash
if (foiAprovado) {
  console.log("Situação: Aprovado 🎉");
} else {
  console.log("Situação: Reprovado 😢");
}

- Estrutura condicional: se foiAprovado for true, mostra que foi aprovado.

- Se não, mostra que foi reprovado.
```

# ✅ EXEMPLO DE EXECUÇÃO

```bash
Se a pessoa digitar:

Nome: Ana
Idade: 17
Notas: 7.5, 8.0, 6.5
```

```bash
A saída seria:

📚 Resultado do Cadastro de Aluno:

Nome: Ana
Idade: 17 anos
Notas: 7.5, 8, 6.5
Média: 7.33
Situação: Aprovado 🎉
```


