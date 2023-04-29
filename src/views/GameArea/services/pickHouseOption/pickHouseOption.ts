import { MoveOption } from 'types'

export const pickHouseOption = (): MoveOption => {
  const randomIndex = Math.floor(Math.random() * 3)

  return Object.values(MoveOption)[randomIndex]
}
