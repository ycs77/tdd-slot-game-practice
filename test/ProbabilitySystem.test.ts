import { describe, expect, test } from 'vitest'
import { Bet } from '../src/Bet'
import { DesignatedNumberGenerator } from '../src/DesignatedNumberGenerator'
import { Odd } from '../src/Odd'
import { Odds } from '../src/Odds'
import { PayLine } from '../src/PayLine'
import { PayTable } from '../src/PayTable'
import { ProbabilitySystem } from '../src/ProbabilitySystem'
import { Reels } from '../src/Reels'
import { SpinResult } from '../src/SpinResult'

describe('probability system', () => {
  test('Row1 hit, bet L2 -> 0', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(0, 0, 0, 0, 0),
        [
          ['A', 'Q', 'K'],
          ['A', '10', 'J'],
          ['A', 'Q', 'K'],
          ['A', 'Q', 'K'],
          ['A', '10', 'J'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L2'))).toStrictEqual(SpinResult.of(0, [
      ['A', 'Q', 'K'],
      ['A', '10', 'J'],
      ['A', 'Q', 'K'],
      ['A', 'Q', 'K'],
      ['A', '10', 'J'],
    ]))
  })

  test('Row1 hit, bet L1 -> 20', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(0, 0, 0, 0, 0),
        [
          ['A', 'Q', 'K'],
          ['A', '10', 'J'],
          ['A', 'Q', 'K'],
          ['A', 'Q', 'K'],
          ['A', '10', 'J'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L1'))).toStrictEqual(SpinResult.of(20, [
      ['A', 'Q', 'K'],
      ['A', '10', 'J'],
      ['A', 'Q', 'K'],
      ['A', 'Q', 'K'],
      ['A', '10', 'J'],
    ]))
  })

  test('Row2 hit, bet L2 -> 20', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(0, 0, 0, 0, 0),
        [
          ['Q', 'A', 'K'],
          ['10', 'A', 'J'],
          ['Q', 'A', 'K'],
          ['Q', 'A', 'K'],
          ['10', 'A', 'J'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L2'))).toStrictEqual(SpinResult.of(20, [
      ['Q', 'A', 'K'],
      ['10', 'A', 'J'],
      ['Q', 'A', 'K'],
      ['Q', 'A', 'K'],
      ['10', 'A', 'J'],
    ]))
  })

  test('Row3 hit, bet L3 -> 20', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(0, 0, 0, 0, 0),
        [
          ['J', 'Q', 'A'],
          ['10', 'J', 'A'],
          ['J', 'Q', 'A'],
          ['J', 'Q', 'A'],
          ['10', 'J', 'A'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L3'))).toStrictEqual(SpinResult.of(20, [
      ['J', 'Q', 'A'],
      ['10', 'J', 'A'],
      ['J', 'Q', 'A'],
      ['J', 'Q', 'A'],
      ['10', 'J', 'A'],
    ]))
  })

  test('Roll then Row3 hit, bet L3 -> 20', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(1, 1, 1, 1, 1),
        [
          ['9', 'A', 'Q', 'A'],
          ['10', '10', 'J', 'A'],
          ['9', 'A', 'Q', 'A'],
          ['9', 'A', 'Q', 'A'],
          ['10', '10', 'J', 'A'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L3'))).toStrictEqual(SpinResult.of(20, [
      ['A', 'Q', 'A'],
      ['10', 'J', 'A'],
      ['A', 'Q', 'A'],
      ['A', 'Q', 'A'],
      ['10', 'J', 'A'],
    ]))
  })

  test('Cyclic Rolling', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(1, 1, 1, 1, 1),
        [
          ['A', 'K', 'Q'],
          ['A', '10', 'J'],
          ['A', 'K', 'Q'],
          ['A', 'K', 'Q'],
          ['A', '10', 'J'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L3'))).toStrictEqual(SpinResult.of(20, [
      ['K', 'Q', 'A'],
      ['10', 'J', 'A'],
      ['K', 'Q', 'A'],
      ['K', 'Q', 'A'],
      ['10', 'J', 'A'],
    ]))
  })

  test('Each Reel spins independently', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(0, 1, 2, 3, 4),
        [
          ['A', 'Q', 'K'],
          ['9', 'A', '10', 'J'],
          ['8', '9', 'A', 'Q', 'K'],
          ['7', '8', '9', 'A', 'Q', 'K'],
          ['6', '7', '8', '9', 'A', '10', 'J'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L1'))).toStrictEqual(SpinResult.of(20, [
      ['A', 'Q', 'K'],
      ['A', '10', 'J'],
      ['A', 'Q', 'K'],
      ['A', 'Q', 'K'],
      ['A', '10', 'J'],
    ]))
  })

  test('Roll then Row2 hit, bet L1L2L3 -> 20', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(1, 1, 1, 1, 1),
        [
          ['K', 'Q', 'A'],
          ['10', 'J', 'A'],
          ['K', 'Q', 'A'],
          ['K', 'Q', 'A'],
          ['10', 'J', 'A'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L1', 'L2', 'L3'))).toStrictEqual(SpinResult.of(20, [
      ['Q', 'A', 'K'],
      ['J', 'A', '10'],
      ['Q', 'A', 'K'],
      ['Q', 'A', 'K'],
      ['J', 'A', '10'],
    ]))
  })

  test('Roll then Row1 Row3 hit, bet L1L2L3 -> 40', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(1, 1, 1, 1, 1),
        [
          ['A', 'Q', 'A'],
          ['A', '10', 'A'],
          ['A', 'Q', 'A'],
          ['A', 'Q', 'A'],
          ['A', '10', 'A'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L1', 'L2', 'L3'))).toStrictEqual(SpinResult.of(40, [
      ['Q', 'A', 'A'],
      ['10', 'A', 'A'],
      ['Q', 'A', 'A'],
      ['Q', 'A', 'A'],
      ['10', 'A', 'A'],
    ]))
  })

  test('L4 hit, bet L4 -> 20', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(0, 0, 0, 0, 0),
        [
          ['A', 'J', 'J'],
          ['J', 'A', 'Q'],
          ['Q', 'Q', 'A'],
          ['K', 'A', 'K'],
          ['A', 'K', 'J'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L4'))).toStrictEqual(SpinResult.of(20, [
      ['A', 'J', 'J'],
      ['J', 'A', 'Q'],
      ['Q', 'Q', 'A'],
      ['K', 'A', 'K'],
      ['A', 'K', 'J'],
    ]))
  })

  test('Row1 hit 4 symbols, bet L1 -> 15', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(0, 0, 0, 0, 0),
        [
          ['A', 'Q', 'K'],
          ['A', '10', 'J'],
          ['A', 'Q', 'K'],
          ['A', 'Q', 'K'],
          ['K', '10', 'J'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L1'))).toStrictEqual(SpinResult.of(15, [
      ['A', 'Q', 'K'],
      ['A', '10', 'J'],
      ['A', 'Q', 'K'],
      ['A', 'Q', 'K'],
      ['K', '10', 'J'],
    ]))
  })

  test('Row1 hit 3 symbols, bet L1 -> 10', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(0, 0, 0, 0, 0),
        [
          ['A', 'Q', 'K'],
          ['A', '10', 'J'],
          ['A', 'Q', 'K'],
          ['J', 'Q', 'K'],
          ['K', '10', 'J'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L1'))).toStrictEqual(SpinResult.of(10, [
      ['A', 'Q', 'K'],
      ['A', '10', 'J'],
      ['A', 'Q', 'K'],
      ['J', 'Q', 'K'],
      ['K', '10', 'J'],
    ]))
  })

  test('Row1 hit as K, bet L1 -> 15', () => {
    const sut = ProbabilitySystem.create(
      Reels.create(
        new DesignatedNumberGenerator(0, 0, 0, 0, 0),
        [
          ['K', 'Q', 'A'],
          ['K', '10', 'J'],
          ['K', 'Q', 'A'],
          ['K', 'Q', 'A'],
          ['K', '10', 'J'],
        ]
      ),
      new PayTable([
        new PayLine('L1', [0, 0, 0, 0, 0]),
        new PayLine('L2', [1, 1, 1, 1, 1]),
        new PayLine('L3', [2, 2, 2, 2, 2]),
        new PayLine('L4', [0, 1, 2, 1, 0]),
      ], new Odds([
        new Odd('A', 5, 20),
        new Odd('A', 4, 15),
        new Odd('A', 3, 10),
        new Odd('K', 5, 15),
        new Odd('K', 4, 10),
        new Odd('K', 3, 8),
      ]))
    )
    expect(sut.spin(new Bet('L1'))).toStrictEqual(SpinResult.of(15, [
      ['K', 'Q', 'A'],
      ['K', '10', 'J'],
      ['K', 'Q', 'A'],
      ['K', 'Q', 'A'],
      ['K', '10', 'J'],
    ]))
  })
})
