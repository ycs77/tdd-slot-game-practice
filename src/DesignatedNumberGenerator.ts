import type { RandomNumberGenerator } from './RandomNumberGenerator'

export class DesignatedNumberGenerator implements RandomNumberGenerator {
  private numbers: number[]

  constructor(...numbers: number[]) {
    this.numbers = numbers
  }

  next(): number {
    return this.numbers.shift() ?? 0
  }
}
