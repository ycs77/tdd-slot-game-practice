export class Screen {
  private rawScreen: string[][]

  constructor(screen: string[][]) {
    this.rawScreen = screen
  }

  static from(screen: string[][]): Screen {
    return new Screen(screen)
  }

  getHitLength(rows: number[]): number {
    if (rows.length !== this.rawScreen.length) {
      throw new Error('Invalid number of rows')
    }

    const firstSymbol = this.rawScreen[0][rows[0]]
    let hitLength = 1

    for (let i = 1; i < this.rawScreen.length; i++) {
      if (this.rawScreen[i][rows[i]] !== firstSymbol) {
        break
      }

      hitLength++
    }

    return hitLength
  }
}
