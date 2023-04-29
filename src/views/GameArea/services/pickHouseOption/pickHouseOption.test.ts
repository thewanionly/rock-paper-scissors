import { Mode, MoveOption, RPSOption } from 'types'
import { pickHouseOption } from './pickHouseOption'

describe('pickHouseOption', () => {
  describe('RPS mode', () => {
    it.each(Array.from({ length: 10 }, () => [pickHouseOption()]))(
      'returns any of the RPS options randomly (returned option: %s)',
      (housePick) => {
        const rpsOptions = Object.values(RPSOption)
        expect(rpsOptions).toContain(housePick)
      }
    )
  })

  describe('RPSLS mode', () => {
    it.each(Array.from({ length: 10 }, () => [pickHouseOption(Mode.RockPaperScissorsLizardSpock)]))(
      'returns any of the RPSLS options randomly (returned option: %s)',
      (housePick) => {
        const rpslsOptions = Object.values(MoveOption)
        expect(rpslsOptions).toContain(housePick)
      }
    )
  })
})
