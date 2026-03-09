import type { Bet } from './Bet'
import type { Screen } from './Screen'
import { Odd } from './Odd'

export class PayLine {
  constructor(
    private name: string,
    private rows: number[]
  ) {}

  getOdd(screen: Screen, bet: Bet): number {
    const odds = [
      new Odd(5, 20),
      new Odd(4, 15),
    ]

    if (!bet.includes(this.name)) {
      return 0
    }

    return odds.find(odd => odd.hitLength === screen.getHitLength(this.rows))?.odd || 0
  }
}
