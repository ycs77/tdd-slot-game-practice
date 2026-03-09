export class SpinResult {
  private constructor(
    private readonly odd: number,
    private readonly screen: string[][]
  ) {}

  static of(odd: number, screen: string[][]): SpinResult {
    return new SpinResult(odd, screen)
  }
}
