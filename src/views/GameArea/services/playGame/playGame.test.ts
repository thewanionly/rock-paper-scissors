import { MoveOption, Result } from 'types'
import { playGame } from './playGame'

describe('playGame', () => {
  describe('Paper beats Rock', () => {
    it.each([
      { userPick: MoveOption.Paper, housePick: MoveOption.Rock, expected: Result.UserWins },
      { userPick: MoveOption.Rock, housePick: MoveOption.Paper, expected: Result.UserLoses },
    ])(
      'results in user $expected when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick, expected }) => {
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })

  describe('Paper beats Spock', () => {
    it.each([
      { userPick: MoveOption.Paper, housePick: MoveOption.Spock, expected: Result.UserWins },
      { userPick: MoveOption.Spock, housePick: MoveOption.Paper, expected: Result.UserLoses },
    ])(
      'results in user $expected when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick, expected }) => {
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })

  describe('Rock beats Scissors', () => {
    it.each([
      { userPick: MoveOption.Rock, housePick: MoveOption.Scissors, expected: Result.UserWins },
      { userPick: MoveOption.Scissors, housePick: MoveOption.Rock, expected: Result.UserLoses },
    ])(
      'results in user $expected when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick, expected }) => {
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })

  describe('Rock beats Lizard', () => {
    it.each([
      { userPick: MoveOption.Rock, housePick: MoveOption.Lizard, expected: Result.UserWins },
      { userPick: MoveOption.Lizard, housePick: MoveOption.Rock, expected: Result.UserLoses },
    ])(
      'results in user $expected when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick, expected }) => {
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })

  describe('Scissors beats Paper', () => {
    it.each([
      { userPick: MoveOption.Scissors, housePick: MoveOption.Paper, expected: Result.UserWins },
      { userPick: MoveOption.Paper, housePick: MoveOption.Scissors, expected: Result.UserLoses },
    ])(
      'results in user $expected when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick, expected }) => {
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })

  describe('Scissors beats Lizard', () => {
    it.each([
      { userPick: MoveOption.Scissors, housePick: MoveOption.Lizard, expected: Result.UserWins },
      { userPick: MoveOption.Lizard, housePick: MoveOption.Scissors, expected: Result.UserLoses },
    ])(
      'results in user $expected when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick, expected }) => {
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })

  describe('Lizard beats Spock', () => {
    it.each([
      { userPick: MoveOption.Lizard, housePick: MoveOption.Spock, expected: Result.UserWins },
      { userPick: MoveOption.Spock, housePick: MoveOption.Lizard, expected: Result.UserLoses },
    ])(
      'results in user $expected when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick, expected }) => {
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })

  describe('Lizard beats Paper', () => {
    it.each([
      { userPick: MoveOption.Lizard, housePick: MoveOption.Paper, expected: Result.UserWins },
      { userPick: MoveOption.Paper, housePick: MoveOption.Lizard, expected: Result.UserLoses },
    ])(
      'results in user $expected when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick, expected }) => {
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })

  describe('Spock beats Scissors', () => {
    it.each([
      { userPick: MoveOption.Spock, housePick: MoveOption.Scissors, expected: Result.UserWins },
      { userPick: MoveOption.Scissors, housePick: MoveOption.Spock, expected: Result.UserLoses },
    ])(
      'results in user $expected when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick, expected }) => {
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })

  describe('Spock beats Rock', () => {
    it.each([
      { userPick: MoveOption.Spock, housePick: MoveOption.Rock, expected: Result.UserWins },
      { userPick: MoveOption.Rock, housePick: MoveOption.Spock, expected: Result.UserLoses },
    ])(
      'results in user $expected when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick, expected }) => {
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })

  describe('draw', () => {
    it.each([
      { userPick: MoveOption.Paper, housePick: MoveOption.Paper },
      { userPick: MoveOption.Rock, housePick: MoveOption.Rock },
      { userPick: MoveOption.Scissors, housePick: MoveOption.Scissors },
      { userPick: MoveOption.Lizard, housePick: MoveOption.Lizard },
      { userPick: MoveOption.Spock, housePick: MoveOption.Spock },
    ])(
      'results in draw when user picks $userPick and the house picks $housePick',
      ({ userPick, housePick }) => {
        const expected = Result.Draw
        const actual = playGame(userPick, housePick)

        expect(actual).toBe(expected)
      }
    )
  })
})
