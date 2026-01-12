export class ProbabilitySystem {
  reels: string[][] = [
    ['A', 'Q', 'K'],
    ['A', 'Q', 'K'],
    ['A', 'Q', 'K'],
    ['A', 'Q', 'K'],
    ['A', '10', 'J'],
  ]

  spin(betLine: string) {
    const firstSymbols = new Set<string>()
    for (const reel of this.reels) {
      firstSymbols.add(reel[0])
    }

    if (firstSymbols.size === 1 && betLine === 'L1') {
      return 20
    }

    return 0
  }
}
