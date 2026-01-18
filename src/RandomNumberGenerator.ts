export class RandomNumberGenerator {
  private numbers: number[]

  constructor(...numbers: number[]) {
    this.numbers = numbers
  }

  next(): number {
    return this.numbers.shift() ?? 0
  }
}
