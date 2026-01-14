export class Reels {
  private reels: string[][]
  private index: number
  private nextIndex: number

  constructor(reels: string[][], nextIndex: number) {
    this.reels = reels
    this.index = 0
    this.nextIndex = nextIndex
  }

  static create(nextIndex: number, reels: string[][]): Reels {
    return new Reels(reels, nextIndex)
  }

  spin(): void {
    this.index = this.nextIndex
  }

  isRowHit(rowIndex: number): boolean {
    const localRowIndex = this.nextIndex + rowIndex

    const symbols = new Set<string>()
    this.reels.forEach(reel => {
      symbols.add(reel[localRowIndex])
    })
    return symbols.size === 1
  }
}
