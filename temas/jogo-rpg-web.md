# Jogo RPG Web (TypeScript)

- **Disciplina:** Programação Orientada a Objetos
- **Natureza:** trabalho prático em TypeScript, com interface web, exercitando os pilares da POO.

## Sumário

1. [Objetivos de aprendizagem](#objetivos-de-aprendizagem)
2. [Conceitos de POO exigidos](#conceitos-de-poo-exigidos)
3. [Pré-requisitos](#pré-requisitos)
4. [O jogo](#o-jogo)
5. [A interface (tela)](#a-interface-tela)
6. [Requisitos funcionais](#requisitos-funcionais)
7. [Requisitos de POO (obrigatórios)](#requisitos-de-poo-obrigatórios)
8. [Estrutura do projeto](#estrutura-do-projeto)
9. [Como executar](#como-executar)
10. [Especificação da Apresentação](#especificação-da-apresentação)
11. [Uso de Inteligência Artificial](#uso-de-inteligência-artificial)
12. [Entregáveis](#entregáveis)
13. [Referências](#referências)

## Objetivos de aprendizagem

Ao final, você deve ser capaz de:

1. Modelar um domínio em classes, com responsabilidades bem definidas.
2. Aplicar os quatro pilares da POO — **abstração, encapsulamento, herança e polimorfismo**.
3. **Separar a lógica do jogo da interface** — o modelo (classes) não conhece a tela; a UI apenas lê o estado e desenha.
4. **Apresentar de forma técnica** as decisões de modelagem e o que aprendeu na construção do jogo.

## Conceitos de POO exigidos

O jogo é só o pretexto: o que será avaliado é **como você modelou**. Seu código precisa demonstrar, de forma clara:

- **Abstração** — classes que representam conceitos do domínio, expondo só o essencial.
- **Encapsulamento** — atributos `private`/`protected` e acesso controlado por métodos/getters.
- **Herança** — uma hierarquia de classes com reúso de comportamento.
- **Polimorfismo** — o mesmo método se comportando de formas diferentes conforme o tipo.
- **Interfaces** e **composição** — contratos e objetos compostos por outros objetos.
- **Separação modelo × interface** — a camada de UI depende do modelo, nunca o contrário.

## Pré-requisitos

- Node.js e npm instalados.
- TypeScript e um bundler/dev server (recomendado: **Vite**).
- Noções de HTML/CSS e dos pilares da POO vistos em aula.

## O jogo

Construa um **jogo de batalha por turnos**, jogável no **navegador**. A ideia mínima:

- Um **herói** (controlado pelo jogador) enfrenta um **inimigo**.
- Cada personagem tem atributos (vida, ataque, defesa) e **ações** próprias.
- A batalha acontece em **turnos**: o jogador escolhe uma ação no menu, o inimigo responde, até um dos lados ser derrotado.

> Você pode trocar o tema (RPG, duelo de robôs, monstros etc.) desde que mantenha os **requisitos de POO** e a **separação modelo × interface**.

## A interface (tela)

A tela é propositalmente simples — **poucas animações**:

- **Dois bonecos** lado a lado (herói à esquerda, inimigo à direita). Podem ser imagens/sprites ou formas/emoji — o foco é a POO, não a arte.
- **Barras de vida (HP)** acima de cada boneco, que atualizam a cada golpe.
- **Menu de ataque** na parte de baixo: botões com as ações do herói (ex.: _Atacar_, _Magia_, _Curar_).
- **Números de dano flutuantes** que sobem e somem quando alguém é atingido.
- **Animação leve de acerto** (um _flash_ ou leve _shake_ no boneco atingido).
- **Tela/mensagem de fim** indicando vitória ou derrota.

## Requisitos funcionais

- [ ] **Dois personagens** renderizados na tela, com barras de vida visíveis.
- [ ] **Menu de ataque** com pelo menos **3 ações** diferentes para o herói.
- [ ] Turno do inimigo com alguma decisão (mesmo que simples/aleatória).
- [ ] **Número de dano flutuante** a cada golpe.
- [ ] **Animação leve** de acerto (flash/shake).
- [ ] Condição de **vitória/derrota** com mensagem final.
- [ ] A UI **lê o estado do modelo** para desenhar — nunca guarda a regra do jogo.

## Requisitos de POO (obrigatórios)

Seu projeto **deve conter e você deve saber apontar na apresentação**:

| Pilar / recurso         | Exigência mínima                                                                        |
| ----------------------- | --------------------------------------------------------------------------------------- |
| **Classe abstrata**     | Uma classe base (ex.: `Personagem`) que não pode ser instanciada diretamente.           |
| **Herança**             | Os tipos de personagem/inimigo herdam da classe base.                                   |
| **Polimorfismo**        | Um método (ex.: `agir()`) sobrescrito, chamado de forma uniforme.                       |
| **Encapsulamento**      | Atributos como vida/ataque `private` ou `protected`, acessados por métodos/getters.     |
| **Interface**           | Pelo menos um contrato (ex.: `Acao`, `Curavel`) implementado por classes.               |
| **Composição**          | Um objeto composto por outro (ex.: `Personagem` tem `Acao[]` ou um `Inventario`).       |
| **Separação de camadas** | A lógica do jogo (pasta `modelo/`) **não importa nada da UI** (pasta `ui/`).           |

## Estrutura do projeto

```
rpg-web/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts          # opcional
├── src/
│   ├── main.ts             # liga o modelo à interface e inicia a batalha
│   ├── modelo/             # LÓGICA DO JOGO — POO pura, sem DOM
│   │   ├── Personagem.ts   # classe abstrata base  ← você escreve
│   │   ├── Guerreiro.ts
│   │   ├── inimigos/
│   │   ├── contratos/      # interfaces (ex.: Acao, Curavel)
│   │   └── Batalha.ts      # motor de turnos
│   ├── ui/                 # CAMADA DE APRESENTAÇÃO — DOM/Canvas
│   │   ├── TelaBatalha.ts  # desenha bonecos, barras de vida e menu
│   │   └── animacoes.ts    # dano flutuante e flash de acerto
│   └── estilos/
│       └── style.css
└── entrega/
    ├── apresentacao.pdf          # slides da apresentação
    └── demonstracao-plano-b.mp4  # vídeo de backup (plano B) da demonstração
```

> **Regra de ouro da arquitetura:** arquivos em `modelo/` **não podem** importar nada de `ui/`. A dependência é sempre `ui/ → modelo/`. Isso é o que será verificado para o requisito de separação de camadas.

## Como executar

Documente no projeto os comandos usados. Com Vite:

```bash
npm install
npm run dev      # abre o jogo no navegador (servidor de desenvolvimento)
```

> **Nota:** o projeto não vem pronto — você precisa criá-lo e adicionar as dependências (`typescript`, `vite`) no `package.json`. Uma forma rápida de iniciar é o template `vanilla-ts` do Vite.

## Especificação da Apresentação

- **Formato:** exposição + demonstração + perguntas.
- **Duração mínima:** 25 minutos (exposição + demonstração).
- **Divisão de tempo:** a critério do grupo.
- **Participação:** todos apresentam pelo menos uma seção.

**Estrutura obrigatória de slides:**

| #    | Seção                           | Conteúdo mínimo                                                           |
| ---- | ------------------------------- | ------------------------------------------------------------------------- |
| 1    | **Capa**                        | Título, integrantes, disciplina, data                                     |
| 2    | **O jogo**                      | O que é o jogo e as regras principais                                     |
| 3    | **Arquitetura (modelo × UI)**   | Como a lógica foi separada da interface, e por quê                        |
| 4    | **Modelagem (diagrama)**        | Diagrama de classes mostrando a hierarquia e as relações                  |
| 5    | **Pilares da POO**              | Onde cada pilar/recurso aparece no código                                 |
| 5.1  | Abstração e herança             | A classe base e as subclasses                                             |
| 5.2  | Polimorfismo                    | O método sobrescrito e como é chamado de forma uniforme                   |
| 5.3  | Encapsulamento                  | Atributos protegidos e o acesso controlado                               |
| 5.4  | Interfaces e composição         | O contrato implementado e o objeto composto                               |
| 6    | **Demonstração (ao vivo)**      | Jogar uma batalha no navegador, mostrando dano, menu e fim de jogo        |
| 7    | **Lições aprendidas**           | Dificuldades de modelagem e o que faria diferente                         |

**Regras de qualidade:** o diagrama de classes deve bater com o código real; na demonstração, aponte no código onde cada pilar está e mostre que `modelo/` não depende de `ui/`; todo trecho mostrado pode ser questionado.

## Uso de Inteligência Artificial

**É permitido usar qualquer ferramenta de IA** (ChatGPT, Claude, Copilot, Gemini etc.) para criar e construir o projeto — código, modelagem e textos. Não há restrição sobre _gerar_ o trabalho com IA.

O que vale nota **não é escrever o código do zero, e sim entender e explicar o que foi feito.** A avaliação e a arguição partem do princípio de que você domina cada parte entregue.

**Requisitos obrigatórios quando houver uso de IA:**

1. **Apontar onde a IA foi usada** — indicar, na apresentação, os pontos em que a IA foi empregada.
2. **Registrar as _issues_ encontradas** — os problemas que a IA causou ou não resolveu e como foram contornados.
3. **Saber explicar** — qualquer trecho entregue pode ser questionado na arguição; não saber explicar algo gerado por IA conta como não domínio do conteúdo.

> **Em resumo:** a IA pode construir; você precisa entender, apontar onde usou e relatar o que deu errado.

## Entregáveis

1. Repositório do jogo rodando no navegador.
2. **Diagrama de classes** do projeto (imagem ou ferramenta de diagramação).
3. **Apresentação (mín. 25 min)** cobrindo a arquitetura (modelo × UI), a modelagem, os pilares da POO e a demonstração ao vivo.
4. **Registro de uso de IA** (seção ou apêndice da apresentação): onde a IA foi usada e as _issues_ encontradas.
5. **Pull Request** aberto a partir de uma branch nomeada `<ano>-<mês>/rpg-web/<tema>` (ex.: `2026-10/rpg-web/duelo-de-robos`), contendo todo o material — código, diagrama, `apresentacao.pdf` e o vídeo plano B (pasta `entrega/`).

## Referências

- [TypeScript — Handbook: Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [TypeScript — Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Vite — Getting Started](https://vitejs.dev/guide/)
- [MDN — Manipulação do DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
- [MDN — CSS transitions (animações leves)](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
