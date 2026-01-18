import type { RandomNumberGenerator } from './RandomNumberGenerator'

export class NativeNumberGenerator implements RandomNumberGenerator {
  private upperBound: number

  constructor(upperBound: number) {
    this.upperBound = upperBound
  }

  next(): number {
    return Math.floor(Math.random() * this.upperBound)
  }
}
