import type { Hit } from './Hit'

export class Odd {
  constructor(
    public symbol: string,
    public hitLength: number,
    public odd: number
  ) {}

  matches(hit: Hit): boolean {
    return this.symbol === hit.symbol && this.hitLength === hit.length
  }
}
