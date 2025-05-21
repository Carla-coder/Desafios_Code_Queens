
# 📌 Calculadora Simples em Portugol

## 📋 Sobre o Projeto

Este é um algoritmo simples desenvolvido no VisualG para realizar operações matemáticas básicas: soma, subtração, multiplicação e divisão. O programa solicita ao usuário dois números inteiros e exibe os resultados de forma organizada.
Além disso, o programa inclui um tratamento para evitar erros de divisão por zero e permite que o usuário realize novos cálculos de forma contínua.

## 🚀 Funcionalidades

✅ Solicitar dois números inteiros ao usuário

✅ Realizar soma, subtração, multiplicação e divisão

✅ Evitar erro de divisão por zero

✅ Permitir que o usuário repita o cálculo quantas vezes quiser

✅ Exibir os resultados de maneira organizada

# 📌 Estrutura do Código

```bash
algoritmo "Calculadora Simples"
var
    num1, num2: inteiro
    soma, subtracao, multiplicacao: inteiro
    divisao: real
    repetir: caractere

inicio
    repetir <- "s" // Inicializa a variável para entrar no loop

    enquanto (repetir = "s") ou (repetir = "S") faca
        escreva("Digite o primeiro número inteiro: ")
        leia(num1)
        escreva("Digite o segundo número inteiro: ")
        leia(num2)

        soma <- num1 + num2
        subtracao <- num1 - num2
        multiplicacao <- num1 * num2

        se num2 <> 0 entao
            divisao <- num1 / num2
        senao
            escreval("Erro: Divisão por zero não permitida.")
            divisao <- 0
        fimse

        escreval("Resultados:")
        escreval("Soma: ", soma)
        escreval("Subtração: ", subtracao)
        escreval("Multiplicação: ", multiplicacao)
        escreval("Divisão: ", divisao)

        escreva("Deseja realizar outro cálculo? (s/n): ")
        leia(repetir)
    fimenquanto  

    escreval("Calculadora encerrada.")
fimalgoritmo
```

## 📝 Explicação do Código (Passo a Passo)

1️⃣ **Declaração de Variáveis**
- **num1, num2:** Armazenam os números inteiros fornecidos pelo usuário.
- **soma, subtracao, multiplicacao:** Guardam os resultados das operações básicas.
- **divisao:** Variável do tipo **real**, pois o resultado da divisão pode ter casas decimais.
- **repetir:** Armazena **"s"**  ou **"n"** para permitir a repetição do cálculo.

2️⃣ **Loop de Repetição**

O programa executa as operações enquanto o usuário responder **"s"** ou **"S"**.

3️⃣ **Entrada de Dados**

**leia(num1), leia(num2):** Capturam os valores digitados pelo usuário.

4️⃣ **Cálculos**

O programa realiza soma, subtração e multiplicação diretamente.
Para a divisão, verifica se num2 é diferente de zero antes de calcular.

5️⃣ **Exibição dos Resultados**

escreval exibe os resultados de maneira organizada.

6️⃣ **Pergunta ao Usuário**

O programa pergunta se o usuário deseja repetir o processo.

7️⃣ **Finalização**

Se o usuário digitar **"n"**, o programa exibe "Calculadora encerrada." e finaliza.

## 🔄 Fluxo de Execução (Exemplo)

**Entrada:**

```bash
Digite o primeiro número inteiro: 10
Digite o segundo número inteiro: 2
```
**Saída Esperada:**
```bash
Resultados:
Soma: 12
Subtração: 8
Multiplicação: 20
Divisão: 5
```
**Repetição:**
```bash
Deseja realizar outro cálculo? (s/n): s
```

Se o usuário digitar "s", o programa volta ao início. Se digitar "n", o programa exibe "Calculadora encerrada." e finaliza.


## 🛠 Requisitos para Execução

🔹 Ter o **VisualG 2.5** instalado.

🔹 Copiar e colar o código no editor do VisualG.

🔹 Executar o programa e testar diferentes valores.

## 📌 Conclusão

Este algoritmo é um excelente exercício para entender conceitos fundamentais de **lógica de programação** em Portugol, incluindo:

- Entrada e saída de dados.
- Operações matemáticas.
- Estruturas de controle (**enquanto**, **se** e **senao**).
- Laço de repetição para tornar o programa dinâmico.

## Desenvolvimento

Este projeto foi desenvolvido por [@Carla-coder](https://www.github.com/Carla-coder) em resposta ao grupo de estudos do grupo CodeQueens no Discord.

