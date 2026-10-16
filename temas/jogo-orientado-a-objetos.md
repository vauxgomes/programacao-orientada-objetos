# Jogo Orientado a Objetos (TypeScript)

- **Disciplina:** Programação Orientada a Objetos
- **Natureza:** trabalho prático em TypeScript, exercitando os pilares da POO.

## Sumário

1. [Objetivos de aprendizagem](#objetivos-de-aprendizagem)
2. [Conceitos de POO exigidos](#conceitos-de-poo-exigidos)
3. [Pré-requisitos](#pré-requisitos)
4. [O jogo](#o-jogo)
5. [Requisitos funcionais](#requisitos-funcionais)
6. [Requisitos de POO (obrigatórios)](#requisitos-de-poo-obrigatórios)
7. [Estrutura do projeto](#estrutura-do-projeto)
8. [Como executar](#como-executar)
9. [Especificação da Apresentação](#especificação-da-apresentação)
10. [Uso de Inteligência Artificial](#uso-de-inteligência-artificial)
11. [Entregáveis](#entregáveis)
12. [Referências](#referências)

## Objetivos de aprendizagem

Ao final, você deve ser capaz de:

1. Modelar um domínio real em classes, com responsabilidades bem definidas.
2. Aplicar os quatro pilares da POO — **abstração, encapsulamento, herança e polimorfismo**.
3. Usar recursos de orientação a objetos do TypeScript — classes, classes abstratas, **interfaces**, modificadores de acesso e composição.
4. **Apresentar de forma técnica** as decisões de modelagem e o que aprendeu na construção do jogo.

## Conceitos de POO exigidos

O jogo é só o pretexto: o que será avaliado é **como você modelou**. Seu código precisa demonstrar, de forma clara:

- **Abstração** — classes que representam conceitos do domínio, expondo só o essencial.
- **Encapsulamento** — atributos `private`/`protected` e acesso controlado por métodos/getters.
- **Herança** — uma hierarquia de classes com reúso de comportamento.
- **Polimorfismo** — o mesmo método se comportando de formas diferentes conforme o tipo.
- **Interfaces** e **composição** — contratos e objetos compostos por outros objetos.

## Pré-requisitos

- Node.js e npm instalados.
- TypeScript (`typescript` + `ts-node`, ou compilação com `tsc`).
- Noções de terminal e dos pilares da POO vistos em aula.

## O jogo

Construa um **jogo de batalha por turnos**, executado no terminal. A ideia mínima:

- Existem **personagens** de tipos diferentes (ex.: Guerreiro, Mago, Arqueiro) e **inimigos** (ex.: Goblin, Dragão).
- Cada personagem tem atributos (vida, ataque, defesa) e **ações** próprias.
- A batalha acontece em **turnos**: a cada turno um lado age, até um dos lados ser derrotado.
- O jogo narra no console o que acontece (quem atacou quem, dano causado, vida restante).

> Você pode trocar o tema (RPG, jogo de cartas, duelo de robôs etc.) desde que mantenha os **requisitos de POO** abaixo. O domínio é livre; a modelagem é o que importa.

## Requisitos funcionais

- [ ] Pelo menos **3 tipos de personagem** jogáveis, com comportamentos distintos.
- [ ] Pelo menos **2 tipos de inimigo**.
- [ ] Sistema de **turnos** com condição de vitória/derrota.
- [ ] **Ações diferentes** por tipo (ex.: ataque físico, magia, cura, habilidade especial).
- [ ] Narração da batalha no console, turno a turno.
- [ ] Tratamento de estados (ex.: personagem derrotado não age mais).

## Requisitos de POO (obrigatórios)

Seu projeto **deve conter e você deve saber apontar na apresentação**:

| Pilar / recurso    | Exigência mínima                                                                      |
| ------------------ | -------------------------------------------------------------------------------------- |
| **Classe abstrata** | Uma classe base (ex.: `Personagem`) que não pode ser instanciada diretamente.         |
| **Herança**         | Os tipos de personagem/inimigo herdam da classe base.                                 |
| **Polimorfismo**    | Um método (ex.: `atacar()` ou `agir()`) sobrescrito, chamado de forma uniforme.       |
| **Encapsulamento**  | Atributos como vida/ataque `private` ou `protected`, acessados por métodos/getters.   |
| **Interface**       | Pelo menos um contrato (ex.: `Curavel`, `Defensavel`) implementado por classes.       |
| **Composição**      | Um objeto composto por outro (ex.: `Personagem` tem um `Inventario` ou `Habilidade`). |

## Estrutura do projeto

```
jogo-poo/
├── package.json
├── tsconfig.json
├── src/
│   ├── main.ts                 # ponto de entrada: monta e roda a batalha
│   ├── personagens/
│   │   ├── Personagem.ts       # classe abstrata base
│   │   ├── Guerreiro.ts        # ← você escreve
│   │   └── ...                 # demais tipos
│   ├── inimigos/
│   │   └── ...                 # ← você escreve
│   ├── contratos/
│   │   └── ...                 # interfaces
│   └── jogo/
│       └── Batalha.ts          # motor de turnos
└── entrega/
    ├── apresentacao.pdf          # slides da apresentação
    └── demonstracao-plano-b.mp4  # vídeo de backup (plano B) da demonstração
```

## Como executar

Documente no projeto os comandos usados. O caminho mais simples:

```bash
npm install
npx ts-node src/main.ts
```

> **Nota:** o `typescript` e o `ts-node` não vêm por padrão — instale-os como dependências de desenvolvimento do projeto (`package.json`).

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
| 3    | **Modelagem (diagrama)**        | Diagrama de classes mostrando a hierarquia e as relações                  |
| 4    | **Pilares da POO**              | Onde cada pilar/recurso aparece no código (um por item do requisito)      |
| 4.1  | Abstração e herança             | A classe base e as subclasses                                             |
| 4.2  | Polimorfismo                    | O método sobrescrito e como é chamado de forma uniforme                   |
| 4.3  | Encapsulamento                  | Atributos protegidos e o acesso controlado                               |
| 4.4  | Interfaces e composição         | O contrato implementado e o objeto composto                               |
| 5    | **Demonstração (ao vivo)**      | Rodar uma batalha no terminal, narrando o que acontece                    |
| 6    | **Lições aprendidas**           | Dificuldades de modelagem e o que faria diferente                         |

**Regras de qualidade:** o diagrama de classes deve bater com o código real; na demonstração, aponte no código onde cada pilar está; todo trecho mostrado pode ser questionado.

## Uso de Inteligência Artificial

**É permitido usar qualquer ferramenta de IA** (ChatGPT, Claude, Copilot, Gemini etc.) para criar e construir o projeto — código, modelagem e textos. Não há restrição sobre _gerar_ o trabalho com IA.

O que vale nota **não é escrever o código do zero, e sim entender e explicar o que foi feito.** A avaliação e a arguição partem do princípio de que você domina cada parte entregue.

**Requisitos obrigatórios quando houver uso de IA:**

1. **Apontar onde a IA foi usada** — indicar, na apresentação, os pontos em que a IA foi empregada.
2. **Registrar as _issues_ encontradas** — os problemas que a IA causou ou não resolveu e como foram contornados.
3. **Saber explicar** — qualquer trecho entregue pode ser questionado na arguição; não saber explicar algo gerado por IA conta como não domínio do conteúdo.

> **Em resumo:** a IA pode construir; você precisa entender, apontar onde usou e relatar o que deu errado.

## Entregáveis

1. Repositório do jogo rodando no terminal.
2. **Diagrama de classes** do projeto (imagem ou ferramenta de diagramação).
3. **Apresentação (mín. 25 min)** cobrindo a modelagem, os pilares da POO e a demonstração ao vivo.
4. **Registro de uso de IA** (seção ou apêndice da apresentação): onde a IA foi usada e as _issues_ encontradas.
5. **Pull Request** aberto a partir de uma branch nomeada `<ano>-<mês>/rpg-terminal/<tema>` (ex.: `2026-10/rpg-terminal/duelo-de-robos`), contendo todo o material — código, diagrama, `apresentacao.pdf` e o vídeo plano B (pasta `entrega/`).

## Referências

- [TypeScript — Handbook: Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [TypeScript — Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [MDN — Programação Orientada a Objetos (conceitos)](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects)
- [ts-node](https://typestrong.org/ts-node/)
