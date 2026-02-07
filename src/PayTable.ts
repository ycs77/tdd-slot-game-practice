import type { Bet } from './Bet'
import type { Screen } from './Screen'

export class PayTable {
  static create(): PayTable {
    return new PayTable()
  }

  getOdd(screen: Screen, bet: Bet): number {
    if (screen.isRowHit(0) && bet.includes('L1')) {
      return 20
    }

    if (screen.isRowHit(1) && bet.includes('L2')) {
      return 20
    }

    if (screen.isRowHit(2) && bet.includes('L3')) {
      return 20
    }

    return 0
  }
}
