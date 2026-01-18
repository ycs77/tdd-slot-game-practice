export class Reel {
  private symbols: string[]

  constructor(symbols: string[]) {
    this.symbols = symbols
  }

  getScreenColumn(index: number): string[] {
    return this.symbols.slice(index, index + 3)
  }
}
