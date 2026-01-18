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
    const screenColumn = Array.from({ length: 3 }, (_, j) => {
      // get cyclic symbols
      return this.symbols[(this.index + j) % this.symbols.length]
    })

    if (screenColumn.length !== 3) {
      throw new Error('Invalid screen column size')
    }

    return screenColumn
  }

  spin(): void {
    this.index = this.randomNumberGenerator.next()
  }
}
