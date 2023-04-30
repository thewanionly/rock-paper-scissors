import { ChangeEvent, useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const switchHandleLayout = {
  layout: true,
  transition: {
    type: 'spring',
    stiffness: 650,
    damping: 30,
  },
}

const S = {
  Switch: styled.label<SwitchStylesProps>`
    cursor: pointer;
    text-indent: -9999px;
    width: 5.5rem;
    height: 3rem;
    background: ${({ checked, theme }) =>
      checked ? theme.colors.switchOnBg : theme.colors.switchOffBg};
    display: flex;
    justify-content: ${({ checked }) => (checked ? 'flex-end' : 'flex-start')};
    align-items: center;
    padding: 0.5rem;
    border-radius: 100px;
    position: relative;
  `,
  SwitchCheckbox: styled.input`
    position: absolute;
    /* hide native radio input while still keeping it technically accessible */
    appearance: none;
    margin: 0;
  `,
  SwitchHandle: styled(motion.div)`
    width: 2.4rem;
    height: 2.4rem;
    background: ${({ theme }) => theme.colors.switchCircleBg};
    border-radius: 90px;
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
    <S.Switch
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
      <S.SwitchHandle {...switchHandleLayout} />
    </S.Switch>
  )
}
