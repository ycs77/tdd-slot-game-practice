import type { Bet } from './Bet'
import type { PayLine } from './PayLine'
import type { Screen } from './Screen'

export class PayTable {
  constructor(
    private payLines: PayLine[] = []
  ) {}

  getOdd(screen: Screen, bet: Bet): number {
    return this.payLines.reduce((odd, payLine) => {
      return odd + payLine.getOdd(screen, bet)
    }, 0)
  }
}
