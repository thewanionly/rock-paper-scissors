import { render, screen, within } from 'test'

import { IconName } from 'components/Icon'
import { theme } from 'styles'
import { Option } from 'types'

import { OptionChip } from './OptionChip'

describe('OptionChip', () => {
  it.each`
    option             | iconName
    ${Option.Rock}     | ${IconName.ROCK}
    ${Option.Paper}    | ${IconName.PAPER}
    ${Option.Scissors} | ${IconName.SCISSORS}
  `('displays $iconName icon when option is $option', ({ iconName, option }) => {
    render(<OptionChip option={option} />)

    const icon = screen.getByLabelText(`${iconName} icon`)

    expect(icon).toBeInTheDocument()
  })

  it.each`
    option             | bgColor                        | boxShadowColor
    ${Option.Rock}     | ${theme.colors.rockChipBg}     | ${theme.colors.rockChipShadow}
    ${Option.Paper}    | ${theme.colors.paperChipBg}    | ${theme.colors.paperChipShadow}
    ${Option.Scissors} | ${theme.colors.scissorsChipBg} | ${theme.colors.scissorsChipShadow}
  `(
    'sets OptionChip outer circle bg color to $bgColor and box shadow color to $boxShadowColor when option is $option',
    ({ option, bgColor, boxShadowColor }) => {
      render(<OptionChip option={option} />)

      const optionChip = screen.getByTestId(`${option} option chip`)
      const optionChipOuterCircle = within(optionChip).getByTestId('outer circle')
      const optionChipOuterCircleShadow = within(optionChip).getByTestId('outer circle shadow')

      expect(optionChipOuterCircle).toHaveStyle(`background-color: ${bgColor}`)
      expect(optionChipOuterCircleShadow).toHaveStyle(`background-color: ${boxShadowColor}`)
    }
  )
})
