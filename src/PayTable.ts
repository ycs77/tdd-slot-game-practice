import type { Bet } from './Bet'
import type { Screen } from './Screen'
import { PayLine } from './PayLine'

export class PayTable {
  private payLines: PayLine[] = [
    new PayLine('L1', [0, 0, 0, 0, 0]),
    new PayLine('L2', [1, 1, 1, 1, 1]),
    new PayLine('L3', [2, 2, 2, 2, 2]),
    new PayLine('L4', [0, 1, 2, 1, 0]),
  ]

  static create(): PayTable {
    return new PayTable()
  }

  getOdd(screen: Screen, bet: Bet): number {
    let odd = 0

    this.payLines.forEach(payLine => {
      if (screen.isHit(payLine.rows) && bet.includes(payLine.name)) {
        odd += 20
      }
    })

    return odd
  }
}
