import { Option, Result } from 'types'

const WinningCondition = {
  [Option.Paper]: [Option.Rock],
  [Option.Rock]: [Option.Scissors],
  [Option.Scissors]: [Option.Paper],
}

export const playGame = (userPick: Option, housePick: Option): Result => {
  if (userPick === housePick) return Result.Draw

  if (WinningCondition[userPick].includes(housePick)) return Result.UserWins

  return Result.UserLoses
}
