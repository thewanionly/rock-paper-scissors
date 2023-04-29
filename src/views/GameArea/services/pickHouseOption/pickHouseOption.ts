import { NewOption } from 'types'

export const pickHouseOption = (): NewOption => {
  const randomIndex = Math.floor(Math.random() * 3)

  return Object.values(NewOption)[randomIndex]
}
