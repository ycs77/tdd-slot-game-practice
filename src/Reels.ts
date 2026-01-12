export class Reels {
  constructor(
    private reels: string[][]
  ) {
    //
  }

  isRow1Hit(): boolean {
    const firstSymbols = new Set<string>()
    this.reels.forEach(reel => {
      firstSymbols.add(reel[0])
    })
    return firstSymbols.size === 1
  }
}
