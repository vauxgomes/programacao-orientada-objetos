// Modelo mínimo, apenas para alimentar a tela do exemplo.
// Este exemplo NÃO é jogável — os ataques são uma lista fixa, sem efeito.
export class Personagem {
  constructor(
    public readonly nome: string,
    public readonly imagem: string,
    public readonly vidaMax: number,
    public vidaAtual: number,
    public readonly ataques: string[],
  ) {}

  /** Percentual de vida (0 a 100), usado para desenhar a barra. */
  get percentualVida(): number {
    const p = (this.vidaAtual / this.vidaMax) * 100;
    return Math.max(0, Math.min(100, p));
  }
}
