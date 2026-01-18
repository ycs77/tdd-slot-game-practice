export class Screen {
  private rawScreen: string[][]

  constructor(screen: string[][]) {
    this.rawScreen = screen
  }

  isRowHit(rowIndex: number): boolean {
    const symbols = new Set<string>()
    this.rawScreen.forEach(screenReel => {
      symbols.add(screenReel[rowIndex])
    })
    return symbols.size === 1
  }
}
