import './style.css';
import { Personagem } from './modelo/Personagem';

// Dados fixos apenas para exibição (exemplo não jogável).
// As imagens devem ser colocadas em: rpg-web/public/images/
const heroi = new Personagem('Herói', '/images/heroi.png', 100, 80, [
  'Ataque 1',
  'Ataque 2',
  'Ataque 3',
  'Ataque 4',
]);

const vilao = new Personagem('Vilão', '/images/vilao.png', 120, 95, [
  'Ataque 1',
  'Ataque 2',
  'Ataque 3',
  'Ataque 4',
]);

function barraDeVida(p: Personagem): string {
  return `
    <div class="hp">
      <div class="hp__topo">
        <span class="hp__nome">${p.nome}</span>
        <span class="hp__valor">${p.vidaAtual}/${p.vidaMax}</span>
      </div>
      <div class="hp__barra">
        <div class="hp__preenchimento" style="width:${p.percentualVida}%"></div>
      </div>
    </div>
  `;
}

function personagem(p: Personagem, lado: 'esquerda' | 'direita'): string {
  return `
    <div class="personagem personagem--${lado}">
      ${barraDeVida(p)}
      <img class="sprite" src="${p.imagem}" alt="${p.nome}" />
    </div>
  `;
}

function menuDeAtaques(p: Personagem): string {
  const botoes = p.ataques
    // Botões apenas visuais — sem handler de clique (exemplo não jogável).
    .map((nome) => `<button class="ataque" type="button">${nome}</button>`)
    .join('');
  return `
    <div class="menu">
      <div class="menu__titulo">Ataques</div>
      <div class="menu__botoes">${botoes}</div>
    </div>
  `;
}

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  <main class="arena">
    <div class="cena">
      ${personagem(heroi, 'esquerda')}
      ${personagem(vilao, 'direita')}
    </div>
    ${menuDeAtaques(heroi)}
    <p class="aviso">Exemplo estático — não jogável.</p>
  </main>
`;
