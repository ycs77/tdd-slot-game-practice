export class Screen {
  private rawScreen: string[][]

  constructor(screen: string[][]) {
    this.rawScreen = screen
  }

  static from(screen: string[][]): Screen {
    return new Screen(screen)
  }

  isRowHit(rowIndex: number): boolean {
    const symbols = new Set<string>()
    this.rawScreen.forEach(screenReel => {
      symbols.add(screenReel[rowIndex])
    })
    return symbols.size === 1
  }

  isHit(): boolean {
    return (
      this.rawScreen[0][0] === this.rawScreen[1][1] &&
      this.rawScreen[1][1] === this.rawScreen[2][2] &&
      this.rawScreen[2][2] === this.rawScreen[3][1] &&
      this.rawScreen[3][1] === this.rawScreen[4][0]
    )
  }
}
