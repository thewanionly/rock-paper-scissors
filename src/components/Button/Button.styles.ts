import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonColor, ButtonVariant } from './Button.types'

// Generates button styles depending on `variant`
const colorVariantStyles = (
  theme: DefaultTheme,
  color: ButtonColor = ButtonColor.Primary,
  variant: ButtonVariant = ButtonVariant.Contained
) =>
  ({
    [ButtonColor.Primary]: {
      [ButtonVariant.Contained]: css`
        background: linear-gradient(
          0deg,
          ${theme.colors.buttonContainedBg1} 0%,
          ${theme.colors.buttonContainedBg2} 100%
        );
        color: ${theme.colors.buttonContainedText};

        &:hover {
          color: ${theme.colors.buttonContainedTextHover};
        }
      `,
      [ButtonVariant.Outlined]: css`
        background-color: transparent;
        border: 0.1rem solid;
        border-color: ${theme.colors.buttonOutlinedBorder};
        color: ${theme.colors.buttonOutlinedText};

        &:hover {
          background: linear-gradient(
            0deg,
            ${theme.colors.buttonContainedBg1} 0%,
            ${theme.colors.buttonContainedBg2} 100%
          );
          color: ${theme.colors.buttonOutlinedTextHover};
        }
      `,
    },
    [ButtonColor.Danger]: {
      [ButtonVariant.Contained]: css`
        background-color: ${theme.colors.buttonDangerContainedBg};
        color: ${theme.colors.buttonDangerContainedText};

        &:hover {
          background-color: ${theme.colors.buttonDangerContainedBgHover};
          color: ${theme.colors.buttonDangerContainedTextHover};
        }
      `,
      [ButtonVariant.Outlined]: css`
        background-color: transparent;
        border: 0.1rem solid;
        border-color: ${theme.colors.buttonDangerOutlinedBorder};
        color: ${theme.colors.buttonDangerOutlinedText};

        &:hover {
          background-color: ${theme.colors.buttonDangerOutlinedBgHover};
          color: ${theme.colors.buttonDangerOutlinedTextHover};
        }
      `,
    },
  }[color][variant])

type ButtonStyleProps = {
  color: ButtonColor
  variant: ButtonVariant
}

export const StyledButton = styled.button<ButtonStyleProps>`
  cursor: pointer;
  border: none;
  border-radius: 0.8rem;
  padding: 1.5rem 3rem;
  text-transform: uppercase;
  line-height: 1.9rem;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
  letter-spacing: 0.25rem;

  transition: all 0.2s;

  ${({ theme, color, variant }) => colorVariantStyles(theme, color, variant)}
`
