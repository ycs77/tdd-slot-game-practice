import { describe, expect, test } from 'vitest'
import { ProbabilitySystem } from '../src/ProbabilitySystem'

describe('probability system', () => {
  test('lose', () => {
    const sut = new ProbabilitySystem()
    expect(sut.spin('L2')).toBe(0)
  })

  test('L1 hot -> 20', () => {
    const sut = new ProbabilitySystem()
    expect(sut.spin('L1')).toBe(20)
  })
})
