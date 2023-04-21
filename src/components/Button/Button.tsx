import { StyledButton } from './Button.styles'
import { ButtonVariant } from './Button.types'

interface CommonProps {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
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
  variant = ButtonVariant.CONTAINED,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton className={className} type="button" onClick={onClick} variant={variant}>
      {label || children}
    </StyledButton>
  )
}
