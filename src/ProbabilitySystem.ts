import { Reels } from './Reels'

export class ProbabilitySystem {
  oldReels: string[][] = [
    ['A', 'Q', 'K'],
    ['A', 'Q', 'K'],
    ['A', 'Q', 'K'],
    ['A', 'Q', 'K'],
    ['A', '10', 'J'],
  ]

  reels: Reels = new Reels(this.oldReels)

  spin(betLine: string) {
    if (this.reels.isRow1Hit() && betLine === 'L1') {
      return 20
    }

    return 0
  }
}
