import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonVariant } from './Button.types'

// Generates button styles depending on `variant`
const colorVariantStyles = (
  theme: DefaultTheme,
  variant: ButtonVariant = ButtonVariant.CONTAINED
) =>
  ({
    [ButtonVariant.CONTAINED]: css`
      background: ${({ theme: { colors } }) =>
        `linear-gradient(0deg, ${colors.buttonContainedBg1} 0%, ${colors.buttonContainedBg2} 100%)`};
      color: ${theme.colors.buttonContainedText};

      &:hover {
        color: ${theme.colors.buttonContainedTextHover};
      }
    `,
    [ButtonVariant.OUTLINED]: css`
      background-color: transparent;
      border: 0.1rem solid;
      border-color: ${theme.colors.buttonOutlinedBorder};
      color: ${theme.colors.buttonOutlinedText};

      &:hover {
        background: ${({ theme: { colors } }) =>
          `linear-gradient(0deg, ${colors.buttonContainedBg1} 0%, ${colors.buttonContainedBg2} 100%)`};
        color: ${theme.colors.buttonOutlinedTextHover};
      }
    `,
  }[variant])

type ButtonStyleProps = {
  variant: ButtonVariant
}

export const StyledButton = styled.button<ButtonStyleProps>`
  cursor: pointer;
  border: none;

  border-radius: 0.8rem;
  padding: 1.5rem 3rem;

  transition: all 0.2s;

  ${({ theme, variant }) => colorVariantStyles(theme, variant)}
`
