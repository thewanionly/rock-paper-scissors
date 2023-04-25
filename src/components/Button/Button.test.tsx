import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'test'

import { Button } from './Button'
import { theme } from 'styles'
import { ButtonColor, ButtonVariant } from './Button.types'

describe('Button', () => {
  describe('Layout', () => {
    it('displays the text passed in the label prop', () => {
      const buttonLabel = 'Click me'
      render(<Button label={buttonLabel} />)

      const button = screen.getByRole('button')
      expect(button).toHaveAccessibleName(buttonLabel)
    })

    it('displays the children passed to the button', () => {
      const buttonLabel = 'Click me'
      render(
        <Button>
          <span>{buttonLabel}</span>
        </Button>
      )

      const button = screen.getByRole('button')
      expect(button).toHaveAccessibleName(buttonLabel)
    })

    it.each`
      color                  | property              | value
      ${ButtonColor.PRIMARY} | ${'background'}       | ${`linear-gradient( 0deg, ${theme.colors.buttonContainedBg1} 0%, ${theme.colors.buttonContainedBg2} 100% )`}
      ${ButtonColor.DANGER}  | ${'background-color'} | ${theme.colors.buttonDangerContainedBg}
    `(
      'sets appropriate styles to button when `color` prop is $color',
      ({ color, property, value }) => {
        const buttonLabel = 'Click me'
        render(<Button label={buttonLabel} color={color} />)

        const button = screen.getByRole('button', { name: buttonLabel })

        expect(button).toHaveStyleRule(property, value)
      }
    )

    it.each`
      variant                    | property          | value
      ${ButtonVariant.CONTAINED} | ${'background'}   | ${`linear-gradient( 0deg, ${theme.colors.buttonContainedBg1} 0%, ${theme.colors.buttonContainedBg2} 100% )`}
      ${ButtonVariant.OUTLINED}  | ${'border-color'} | ${theme.colors.buttonOutlinedBorder}
    `(
      `sets appropriate styles to button when \`variant\` prop is $variant`,
      ({ variant, property, value }) => {
        const buttonLabel = 'Click me'
        render(<Button label={buttonLabel} variant={variant} />)

        const button = screen.getByRole('button', { name: buttonLabel })

        expect(button).toHaveStyleRule(property, value)
      }
    )

    it('calls the function passed in the `onClick` prop', async () => {
      const buttonLabel = 'Click me'
      const onClickHandler = jest.fn()
      render(<Button label={buttonLabel} onClick={onClickHandler} />)

      const button = screen.getByRole('button', { name: buttonLabel })
      userEvent.click(button)

      await waitFor(() => expect(onClickHandler).toHaveBeenCalled())
    })
  })
})
