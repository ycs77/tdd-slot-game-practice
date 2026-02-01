import type { PayTable } from './PayTable'
import type { Reels } from './Reels'

export class ProbabilitySystem {
  reels: Reels
  payTable: PayTable

  constructor(reels: Reels, payTable: PayTable) {
    this.reels = reels
    this.payTable = payTable
  }

  static create(reels: Reels, payTable: PayTable): ProbabilitySystem {
    return new ProbabilitySystem(reels, payTable)
  }

  spin(...betLines: string[]): number {
    // 轉動輪盤
    this.reels.spin()

    // 計算賠率
    return this.payTable.getOdd(this.reels, betLines)
  }
}
