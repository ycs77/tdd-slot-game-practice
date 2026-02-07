import type { RandomNumberGenerator } from './RandomNumberGenerator'
import { Reel } from './Reel'
import { Screen } from './Screen'

export class Reels {
  private reels: Reel[]

  constructor(reels: string[][], randomNumberGenerator: RandomNumberGenerator) {
    this.reels = reels.map(reel => Reel.from(reel, randomNumberGenerator))
  }

  static create(randomNumberGenerator: RandomNumberGenerator, reels: string[][]): Reels {
    return new Reels(reels, randomNumberGenerator)
  }

  spin(): void {
    this.reels.forEach(reel => reel.spin())
  }

  getScreen(): Screen {
    return Screen.from(
      this.reels.map(reel => reel.getScreenColumn())
    )
  }
}
