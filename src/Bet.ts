export class Bet {
  private lines: string[]

  constructor(betLines: string[]) {
    this.lines = betLines
  }

  includes(line: string): boolean {
    return this.lines.includes(line)
  }
}
