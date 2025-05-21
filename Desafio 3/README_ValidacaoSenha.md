
# 🔐 Algoritmo de Validação de Senha

## 🧠 Objetivo

Este algoritmo foi desenvolvido com o intuito de praticar **lógica de programação básica** utilizando **Portugol** no Visualg. O desafio é simular um sistema de **validação de senha**, permitindo até **3 tentativas** antes de **bloquear o acesso do usuário**.

---

## 📌 Funcionalidades

- Solicita o nome do usuário.
- Permite que o usuário **crie uma senha personalizada**.
- Pede que o usuário digite a senha criada para validar o acesso.
- Permite até **3 tentativas** para digitar a senha correta.
- Exibe mensagens claras conforme a tentativa.
- **Bloqueia o acesso** após 3 tentativas falhas.
- Mostra **quantas tentativas restam** a cada erro.

---

## 🖥️ Exemplo de Execução

```
Digite seu nome:
Carla

Olá, Carla! Crie uma senha:
1234

Carla, digite sua senha:
1111
Senha incorreta! Você ainda tem 2 tentativa(s).

Carla, digite sua senha:
0000
Senha incorreta! Você ainda tem 1 tentativa(s).

Carla, digite sua senha:
1234
Senha correta. Acesso liberado! 🔑
```

---

## 📜 Estrutura do Código

### Declaração de variáveis

```portugol
var
    nome, senha, tentativa: caractere
    tentativas: inteiro
    acesso: logico
```

- `nome`: Armazena o nome do usuário.
- `senha`: Armazena a senha criada.
- `tentativa`: Guarda a senha digitada pelo usuário para verificação.
- `tentativas`: Conta quantas vezes o usuário errou a senha.
- `acesso`: Variável lógica para saber se o acesso foi concedido.

### Entrada de dados

```portugol
escreval("Digite seu nome:")
leia(nome)

escreval("Olá, ", nome, "! Crie uma senha:")
leia(senha)
```

### Inicialização de variáveis de controle

```portugol
tentativas <- 0
acesso <- falso
```

### Laço de verificação de senha

```portugol
enquanto (tentativas < 3) e (acesso = falso) faca
```

### Comparação e mensagens personalizadas

```portugol
se tentativa = senha entao
    escreval("Senha correta. Acesso liberado! 🔑")
    acesso <- verdadeiro
senao
    tentativas <- tentativas + 1
    se tentativas < 3 entao
        escreval("Senha incorreta! Você ainda tem ", 3 - tentativas, " tentativa(s).")
    senao
        escreval("Senha incorreta! Acesso bloqueado. 🔒")
```

---

## 🛠️ Possíveis Melhorias Futuras

- Permitir redefinição de senha após bloqueio (com autenticação extra).
- Ocultar a senha ao digitar (se a linguagem permitir).
- Armazenar login e senha em um banco de dados ou arquivo.
- Criar múltiplos usuários e senhas.

---

## 👩‍💻 Autoria

Desenvolvido por **Carla Coder**, como parte dos desafios de lógica de programação da comunidade CodeQueens no Discord.
