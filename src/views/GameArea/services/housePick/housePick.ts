import { Option } from 'types'

export const housePick = (): Option => {
  const randomIndex = Math.floor(Math.random() * 3)

  return Object.values(Option)[randomIndex]
}
