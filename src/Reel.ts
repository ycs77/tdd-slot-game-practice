export class Reel {
  private symbols: string[]

  constructor(symbols: string[]) {
    this.symbols = symbols
  }

  static from(symbols: string[]): Reel {
    return new Reel(symbols)
  }

  getScreenColumn(index: number): string[] {
    return this.symbols.slice(index, index + 3)
  }
}
