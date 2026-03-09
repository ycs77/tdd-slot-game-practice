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
      new Odd('A', 5, 20),
      new Odd('A', 4, 15),
      new Odd('A', 3, 10),
      new Odd('K', 5, 15),
      new Odd('K', 4, 10),
      new Odd('K', 3, 8),
    ]

    if (!bet.includes(this.name)) {
      return 0
    }

    const hit = screen.getHit(this.rows)
    return odds.find(odd => odd.matches(hit))?.odd ?? 0
  }
}
