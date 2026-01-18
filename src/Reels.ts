import { Reel } from './Reel'
import { Screen } from './Screen'

export class Reels {
  private reels: Reel[]
  private index: number
  private nextIndex: number

  constructor(reels: string[][], nextIndex: number) {
    this.reels = reels.map(reel => Reel.from(reel))
    this.index = 0
    this.nextIndex = nextIndex
  }

  static create(nextIndex: number, reels: string[][]): Reels {
    return new Reels(reels, nextIndex)
  }

  spin(): void {
    this.index = this.nextIndex
  }

  isRowHit(rowIndex: number): boolean {
    const screen = this.getScreen()
    return screen.isRowHit(rowIndex)
  }

  private getScreen(): Screen {
    return Screen.from(
      this.reels.map(reel => reel.getScreenColumn(this.nextIndex))
    )
  }
}
