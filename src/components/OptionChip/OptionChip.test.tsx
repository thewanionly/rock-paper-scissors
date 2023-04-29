import { render, screen, within } from 'test'

import { IconName } from 'components/Icon'
import { theme } from 'styles'
import { NewOption } from 'types'

import { OptionChip } from './OptionChip'

describe('OptionChip', () => {
  it.each`
    option                | iconName
    ${NewOption.Rock}     | ${IconName.ROCK}
    ${NewOption.Paper}    | ${IconName.PAPER}
    ${NewOption.Scissors} | ${IconName.SCISSORS}
    ${NewOption.Lizard}   | ${IconName.LIZARD}
    ${NewOption.Spock}    | ${IconName.SPOCK}
  `('displays $iconName icon when option is $option', ({ iconName, option }) => {
    render(<OptionChip option={option} />)

    const icon = screen.getByLabelText(`${iconName} icon`)

    expect(icon).toBeInTheDocument()
  })

  it.each`
    option                | bgColor                        | boxShadowColor
    ${NewOption.Rock}     | ${theme.colors.rockChipBg}     | ${theme.colors.rockChipShadow}
    ${NewOption.Paper}    | ${theme.colors.paperChipBg}    | ${theme.colors.paperChipShadow}
    ${NewOption.Scissors} | ${theme.colors.scissorsChipBg} | ${theme.colors.scissorsChipShadow}
    ${NewOption.Lizard}   | ${theme.colors.lizardChipBg}   | ${theme.colors.lizardChipShadow}
    ${NewOption.Spock}    | ${theme.colors.spockChipBg}    | ${theme.colors.spockChipShadow}
  `(
    'sets OptionChip outer circle bg color to $bgColor and box shadow color to $boxShadowColor when option is $option',
    ({ option, bgColor, boxShadowColor }) => {
      render(<OptionChip option={option} />)

      const optionChip = screen.getByTestId(`${option}-option-chip`)
      const optionChipOuterCircle = within(optionChip).getByTestId('outer-circle')
      const optionChipOuterCircleShadow = within(optionChip).getByTestId('outer-circle-shadow')

      expect(optionChipOuterCircle).toHaveStyle(`background-color: ${bgColor}`)
      expect(optionChipOuterCircleShadow).toHaveStyle(`background-color: ${boxShadowColor}`)
    }
  )
})
