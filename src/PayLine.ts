import type { Bet } from './Bet'
import type { Odds } from './Odds'
import type { Screen } from './Screen'

export class PayLine {
  constructor(
    private name: string,
    private rows: number[]
  ) {}

  getOdd(screen: Screen, bet: Bet, odds: Odds): number {
    if (!bet.includes(this.name)) {
      return 0
    }

    const hit = screen.getHit(this.rows)
    return odds.getOdd(hit)
  }
}
