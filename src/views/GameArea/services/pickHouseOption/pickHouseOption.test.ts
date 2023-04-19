import { Option } from 'types'
import { pickHouseOption } from './pickHouseOption'

const options = Object.values(Option)

describe('pickHouseOption', () => {
  it.each(Array.from({ length: 10 }, () => [pickHouseOption()]))(
    'returns any of the options randomly (returned option: %s)',
    (housePick) => {
      expect(options).toContain(housePick)
    }
  )
})