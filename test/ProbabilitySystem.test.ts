import { describe, expect, test } from 'vitest'
import { ProbabilitySystem } from '../src/ProbabilitySystem'

describe('probability system', () => {
  test('lose', () => {
    const sut = new ProbabilitySystem()
    expect(sut.spin()).toBe(0)
  })
})
