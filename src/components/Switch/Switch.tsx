import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

const StyledSwitch = styled.label<SwitchStylesProps>`
  cursor: pointer;
  text-indent: -9999px;
  width: 5.5rem;
  height: 3rem;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.switchOnBg : theme.colors.switchOffBg};
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: ${({ checked }) => (checked ? '50%' : '5px')};
    top: 3px;
    width: 2.4rem;
    height: 2.4rem;
    background: ${({ theme }) => theme.colors.switchCircleBg};
    border-radius: 90px;
    transition: 0.3s;
  }
`

const S = {
  SwitchCheckbox: styled.input`
    position: absolute;
    /* hide native radio input while still keeping it technically accessible */
    appearance: none;
    margin: 0;
  `,
}

type SwitchStylesProps = {
  checked: boolean
}

type SwitchProps = {
  id?: string
  className?: string
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Switch = ({ id, className = '', checked = false, onChange }: SwitchProps) => {
  const [isTicked, setIsTicked] = useState(checked)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTicked((prev) => !prev)
    onChange?.(e)
  }

  return (
    <StyledSwitch
      htmlFor="checkbox"
      checked={isTicked}
      className={className}
      data-testid={id ? `${id}-switch` : 'switch'}
    >
      <S.SwitchCheckbox
        id="checkbox"
        type="checkbox"
        aria-checked={isTicked}
        checked={isTicked}
        onChange={handleChange}
      />
    </StyledSwitch>
  )
}
