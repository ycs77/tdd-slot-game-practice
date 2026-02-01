import type { Reels } from './Reels'

export class PayTable {
  static create(): PayTable {
    return new PayTable()
  }

  getOdd(reels: Reels, betLines: string[]): number {
    if (reels.isRowHit(0) && this.isHit('L1', betLines)) {
      return 20
    }

    if (reels.isRowHit(1) && this.isHit('L2', betLines)) {
      return 20
    }

    if (reels.isRowHit(2) && this.isHit('L3', betLines)) {
      return 20
    }

    return 0
  }

  private isHit(line: string, betLines: string[]): boolean {
    return betLines.includes(line)
  }
}
