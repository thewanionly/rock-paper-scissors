import { Option, Result } from 'types'
import { playGame } from './playGame'

describe('playGame', () => {
  describe('Paper beats Rock', () => {
    it.each([
      { userPick: Option.Paper, housePick: Option.Rock, expected: Result.UserWins },
      { userPick: Option.Rock, housePick: Option.Paper, expected: Result.UserLoses },
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
      { userPick: Option.Rock, housePick: Option.Scissors, expected: Result.UserWins },
      { userPick: Option.Scissors, housePick: Option.Rock, expected: Result.UserLoses },
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
      { userPick: Option.Scissors, housePick: Option.Paper, expected: Result.UserWins },
      { userPick: Option.Paper, housePick: Option.Scissors, expected: Result.UserLoses },
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
      { userPick: Option.Paper, housePick: Option.Paper },
      { userPick: Option.Rock, housePick: Option.Rock },
      { userPick: Option.Scissors, housePick: Option.Scissors },
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
