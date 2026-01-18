import { Screen } from './Screen'

export class Reels {
  private reels: string[][]
  private index: number
  private nextIndex: number

  constructor(reels: string[][], nextIndex: number) {
    this.reels = reels
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
    const rawScreen: string[][] = []

    this.reels.forEach(reel => {
      rawScreen.push(reel.slice(this.nextIndex, this.nextIndex + 3))
    })

    return new Screen(rawScreen)
  }
}
