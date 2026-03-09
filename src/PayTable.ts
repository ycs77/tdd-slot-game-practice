import type { Bet } from './Bet'
import type { Odds } from './Odds'
import type { PayLine } from './PayLine'
import type { Screen } from './Screen'

export class PayTable {
  constructor(
    private payLines: PayLine[],
    private odds: Odds
  ) {}

  getOdd(screen: Screen, bet: Bet): number {
    return this.payLines.reduce((odd, payLine) => odd + payLine.getOdd(screen, bet, this.odds), 0)
  }
}
