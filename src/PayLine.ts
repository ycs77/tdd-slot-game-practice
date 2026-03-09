import type { Bet } from './Bet'
import type { Screen } from './Screen'

export class PayLine {
  constructor(
    private name: string,
    private rows: number[]
  ) {}

  getOdd(screen: Screen, bet: Bet): number {
    if (bet.includes(this.name)) {
      if (screen.getHitLength(this.rows) === 5) {
        return 20
      } else if (screen.getHitLength(this.rows) === 4) {
        return 15
      }
    }

    return 0
  }
}
