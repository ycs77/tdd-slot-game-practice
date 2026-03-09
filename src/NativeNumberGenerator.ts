import type { RandomNumberGenerator } from './RandomNumberGenerator'

export class NativeNumberGenerator implements RandomNumberGenerator {
  constructor(
    private upperBound: number
  ) {}

  next(): number {
    return Math.floor(Math.random() * this.upperBound)
  }
}
