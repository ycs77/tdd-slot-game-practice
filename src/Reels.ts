export class Reels {
  constructor(
    private reels: string[][]
  ) {
    //
  }

  static create(reels: string[][]): Reels {
    return new Reels(reels)
  }

  isRowHit(rowIndex: number): boolean {
    const symbols = new Set<string>()
    this.reels.forEach(reel => {
      symbols.add(reel[rowIndex])
    })
    return symbols.size === 1
  }
}
