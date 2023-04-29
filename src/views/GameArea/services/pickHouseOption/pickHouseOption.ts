import { Mode, MoveOption, RPSOption } from 'types'

export const pickHouseOption = (mode: Mode = Mode.RockPaperScissors): MoveOption => {
  const options =
    mode === Mode.RockPaperScissors ? Object.values(RPSOption) : Object.values(MoveOption)
  const randomIndex = Math.floor(Math.random() * options.length)

  return options[randomIndex]
}
