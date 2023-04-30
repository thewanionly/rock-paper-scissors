import { forwardRef } from 'react'
import { StyledButton } from './Button.styles'
import { ButtonColor, ButtonVariant } from './Button.types'

interface CommonProps {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  color?: ButtonColor
  variant?: ButtonVariant
}

type ConditionalProps =
  | {
      label: string
      children?: never
    }
  | {
      label?: never
      children: React.ReactNode
    }

type ButtonProps = CommonProps & ConditionalProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className = '',
    label,
    children,
    color = ButtonColor.Primary,
    variant = ButtonVariant.Contained,
    onClick,
  },
  ref
) {
  return (
    <StyledButton
      className={className}
      ref={ref}
      type="button"
      onClick={onClick}
      color={color}
      variant={variant}
    >
      {label || children}
    </StyledButton>
  )
})
