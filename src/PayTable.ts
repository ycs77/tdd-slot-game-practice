import type { Bet } from './Bet'
import type { Screen } from './Screen'

export class PayTable {
  static create(): PayTable {
    return new PayTable()
  }

  getOdd(screen: Screen, bet: Bet): number {
    let odd = 0

    if (screen.isRowHit(0) && bet.includes('L1')) {
      odd += 20
    }

    if (screen.isRowHit(1) && bet.includes('L2')) {
      odd += 20
    }

    if (screen.isRowHit(2) && bet.includes('L3')) {
      odd += 20
    }

    if (screen.isHit() && bet.includes('L4')) {
      odd += 20
    }

    return odd
  }
}
