export class Bet {
  private lines: string[]

  constructor(...lines: string[]) {
    this.lines = lines
  }

  includes(line: string): boolean {
    return this.lines.includes(line)
  }
}
