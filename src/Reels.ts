import type { RandomNumberGenerator } from './RandomNumberGenerator'
import { Reel } from './Reel'
import { Screen } from './Screen'

export class Reels {
  private reels: Reel[]
  private randomNumberGenerator: RandomNumberGenerator
  private indices: number[]

  constructor(reels: string[][], randomNumberGenerator: RandomNumberGenerator) {
    this.reels = reels.map(reel => Reel.from(reel))
    this.randomNumberGenerator = randomNumberGenerator
    this.indices = [0, 0, 0, 0, 0]
  }

  static create(randomNumberGenerator: RandomNumberGenerator, reels: string[][]): Reels {
    return new Reels(reels, randomNumberGenerator)
  }

  spin(): void {
    this.indices = this.indices.map(() => this.randomNumberGenerator.next())
  }

  isRowHit(rowIndex: number): boolean {
    const screen = this.getScreen()
    return screen.isRowHit(rowIndex)
  }

  private getScreen(): Screen {
    return Screen.from(
      this.reels.map((reel, i) => {
        return reel.getScreenColumn(this.indices[i])
      })
    )
  }
}
