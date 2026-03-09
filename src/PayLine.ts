import type { Bet } from './Bet'
import type { Screen } from './Screen'

export class PayLine {
  constructor(
    private name: string,
    private rows: number[]
  ) {}

  getOdd(screen: Screen, bet: Bet): number {
    if (screen.isHit(this.rows) && bet.includes(this.name)) {
      return 20
    }

    return 0
  }
}
