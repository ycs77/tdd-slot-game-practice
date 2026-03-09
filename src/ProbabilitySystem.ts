import type { Bet } from './Bet'
import type { PayTable } from './PayTable'
import type { Reels } from './Reels'

export class ProbabilitySystem {
  constructor(
    private reels: Reels,
    private payTable: PayTable
  ) {}

  static create(reels: Reels, payTable: PayTable): ProbabilitySystem {
    return new ProbabilitySystem(reels, payTable)
  }

  spin(bet: Bet): number {
    // 轉動輪盤
    this.reels.spin()

    // 計算賠率
    const screen = this.reels.getScreen()
    return this.payTable.getOdd(screen, bet)
  }
}
