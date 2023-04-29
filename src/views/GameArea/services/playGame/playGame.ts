import { MoveOption, Result } from 'types'

const WinningCondition: Record<MoveOption, MoveOption[]> = {
  [MoveOption.Paper]: [MoveOption.Rock, MoveOption.Spock],
  [MoveOption.Rock]: [MoveOption.Scissors, MoveOption.Lizard],
  [MoveOption.Scissors]: [MoveOption.Paper, MoveOption.Lizard],
  [MoveOption.Lizard]: [MoveOption.Spock, MoveOption.Paper],
  [MoveOption.Spock]: [MoveOption.Scissors, MoveOption.Rock],
}

export const playGame = (userPick: MoveOption, housePick: MoveOption): Result => {
  if (userPick === housePick) return Result.Draw

  if (WinningCondition[userPick].includes(housePick)) return Result.UserWins

  return Result.UserLoses
}
