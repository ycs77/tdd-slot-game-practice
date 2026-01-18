import type { RandomNumberGenerator } from './RandomNumberGenerator'

export class Reel {
  private symbols: string[]
  private randomNumberGenerator: RandomNumberGenerator
  private index: number

  constructor(symbols: string[], randomNumberGenerator: RandomNumberGenerator) {
    this.symbols = symbols
    this.randomNumberGenerator = randomNumberGenerator
    this.index = 0
  }

  static from(symbols: string[], randomNumberGenerator: RandomNumberGenerator): Reel {
    return new Reel(symbols, randomNumberGenerator)
  }

  getScreenColumn(): string[] {
    return this.symbols.slice(this.index, this.index + 3)
  }

  spin(): void {
    this.index = this.randomNumberGenerator.next()
  }
}
