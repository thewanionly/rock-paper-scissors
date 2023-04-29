import { NewOption, Result } from 'types'

const WinningCondition = {
  [NewOption.Paper]: [NewOption.Rock, NewOption.Spock],
  [NewOption.Rock]: [NewOption.Scissors, NewOption.Lizard],
  [NewOption.Scissors]: [NewOption.Paper, NewOption.Lizard],
  [NewOption.Lizard]: [NewOption.Spock, NewOption.Paper],
  [NewOption.Spock]: [NewOption.Scissors, NewOption.Rock],
}

export const playGame = (userPick: NewOption, housePick: NewOption): Result => {
  if (userPick === housePick) return Result.Draw

  if (WinningCondition[userPick].includes(housePick)) return Result.UserWins

  return Result.UserLoses
}
