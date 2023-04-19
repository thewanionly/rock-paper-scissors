import { Option } from 'types'
import { housePick } from './housePick'

const options = Object.values(Option)

describe('housePick', () => {
  it.each(Array.from({ length: 10 }, () => [housePick()]))(
    'returns any of the options randomly (returned option: %s)',
    (housePick) => {
      expect(options).toContain(housePick)
    }
  )
})
