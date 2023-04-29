import { NewOption, Result } from 'types'
import { playGame } from './playGame'

describe('playGame', () => {
  describe('Paper beats Rock', () => {
    it.each([
      { userPick: NewOption.Paper, housePick: NewOption.Rock, expected: Result.UserWins },
      { userPick: NewOption.Rock, housePick: NewOption.Paper, expected: Result.UserLoses },
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
      { userPick: NewOption.Paper, housePick: NewOption.Spock, expected: Result.UserWins },
      { userPick: NewOption.Spock, housePick: NewOption.Paper, expected: Result.UserLoses },
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
      { userPick: NewOption.Rock, housePick: NewOption.Scissors, expected: Result.UserWins },
      { userPick: NewOption.Scissors, housePick: NewOption.Rock, expected: Result.UserLoses },
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
      { userPick: NewOption.Rock, housePick: NewOption.Lizard, expected: Result.UserWins },
      { userPick: NewOption.Lizard, housePick: NewOption.Rock, expected: Result.UserLoses },
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
      { userPick: NewOption.Scissors, housePick: NewOption.Paper, expected: Result.UserWins },
      { userPick: NewOption.Paper, housePick: NewOption.Scissors, expected: Result.UserLoses },
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
      { userPick: NewOption.Scissors, housePick: NewOption.Lizard, expected: Result.UserWins },
      { userPick: NewOption.Lizard, housePick: NewOption.Scissors, expected: Result.UserLoses },
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
      { userPick: NewOption.Lizard, housePick: NewOption.Spock, expected: Result.UserWins },
      { userPick: NewOption.Spock, housePick: NewOption.Lizard, expected: Result.UserLoses },
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
      { userPick: NewOption.Lizard, housePick: NewOption.Paper, expected: Result.UserWins },
      { userPick: NewOption.Paper, housePick: NewOption.Lizard, expected: Result.UserLoses },
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
      { userPick: NewOption.Spock, housePick: NewOption.Scissors, expected: Result.UserWins },
      { userPick: NewOption.Scissors, housePick: NewOption.Spock, expected: Result.UserLoses },
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
      { userPick: NewOption.Spock, housePick: NewOption.Rock, expected: Result.UserWins },
      { userPick: NewOption.Rock, housePick: NewOption.Spock, expected: Result.UserLoses },
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
      { userPick: NewOption.Paper, housePick: NewOption.Paper },
      { userPick: NewOption.Rock, housePick: NewOption.Rock },
      { userPick: NewOption.Scissors, housePick: NewOption.Scissors },
      { userPick: NewOption.Lizard, housePick: NewOption.Lizard },
      { userPick: NewOption.Spock, housePick: NewOption.Spock },
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
