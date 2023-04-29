import { render, screen, within } from 'test'

import { IconName } from 'components/Icon'
import { theme } from 'styles'
import { MoveOption } from 'types'

import { OptionChip } from './OptionChip'

describe('OptionChip', () => {
  it.each`
    option                 | iconName
    ${MoveOption.Rock}     | ${IconName.ROCK}
    ${MoveOption.Paper}    | ${IconName.PAPER}
    ${MoveOption.Scissors} | ${IconName.SCISSORS}
    ${MoveOption.Lizard}   | ${IconName.LIZARD}
    ${MoveOption.Spock}    | ${IconName.SPOCK}
  `('displays $iconName icon when option is $option', ({ iconName, option }) => {
    render(<OptionChip option={option} />)

    const icon = screen.getByLabelText(`${iconName} icon`)

    expect(icon).toBeInTheDocument()
  })

  it.each`
    option                 | bgColor                        | boxShadowColor
    ${MoveOption.Rock}     | ${theme.colors.rockChipBg}     | ${theme.colors.rockChipShadow}
    ${MoveOption.Paper}    | ${theme.colors.paperChipBg}    | ${theme.colors.paperChipShadow}
    ${MoveOption.Scissors} | ${theme.colors.scissorsChipBg} | ${theme.colors.scissorsChipShadow}
    ${MoveOption.Lizard}   | ${theme.colors.lizardChipBg}   | ${theme.colors.lizardChipShadow}
    ${MoveOption.Spock}    | ${theme.colors.spockChipBg}    | ${theme.colors.spockChipShadow}
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
