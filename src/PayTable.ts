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

    const rawScreen = screen.getRawScreen()
    if (
      rawScreen[0][0] === rawScreen[1][1] &&
      rawScreen[1][1] === rawScreen[2][2] &&
      rawScreen[2][2] === rawScreen[3][1] &&
      rawScreen[3][1] === rawScreen[4][0] &&
      bet.includes('L4')
    ) {
      odd += 20
    }

    return odd
  }
}
