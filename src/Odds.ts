import type { Hit } from './Hit'
import type { Odd } from './Odd'

export class Odds {
  constructor(
    private rawOdds: Odd[]
  ) {}

  getOdd(hit: Hit): number {
    return this.rawOdds.find(odd => odd.matches(hit))?.odd ?? 0
  }
}
