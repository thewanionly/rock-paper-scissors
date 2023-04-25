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

export const Button = ({
  className = '',
  label,
  children,
  color = ButtonColor.PRIMARY,
  variant = ButtonVariant.CONTAINED,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      type="button"
      onClick={onClick}
      color={color}
      variant={variant}
    >
      {label || children}
    </StyledButton>
  )
}
