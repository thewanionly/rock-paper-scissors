import { FormEvent } from 'react'
import styled, { css } from 'styled-components'

import { OptionChip } from 'components'
import { Option } from 'types'

const optionChipHover = css`
  box-shadow: 0 0 0 20px ${({ theme: { colors } }) => colors.optionPickerItemHover};

  @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
    box-shadow: 0 0 0 22px ${({ theme: { colors } }) => colors.optionPickerItemHover};
  }
`

const StyledOptionChip = styled(OptionChip)`
  transition: all 0.3s ease;

  &:hover,
  :focus {
    ${optionChipHover}
  }
`

const S = {
  OptionPicker: styled.fieldset`
    border: none;
  `,
  OptionPickerItem: styled.label`
    cursor: pointer;
  `,
  OptionPickerItemRadioInput: styled.input`
    /* hide native radio input while still keeping it technically accessible */
    appearance: none;
    margin: 0;

    &:focus-visible {
      + ${StyledOptionChip} {
        ${optionChipHover}
      }
    }
  `,
}

type OptionPickerProps = {
  onOptionPicked: (option: Option) => void
}

export const OptionPicker = ({ onOptionPicked }: OptionPickerProps) => {
  const handleOptionPicked = (event: FormEvent<HTMLFieldSetElement>) => {
    const { value } = event.target as HTMLInputElement

    onOptionPicked(value as Option)
  }

  return (
    <S.OptionPicker onChange={handleOptionPicked}>
      <S.OptionPickerItem htmlFor={Option.Paper}>
        <S.OptionPickerItemRadioInput
          type="radio"
          id={Option.Paper}
          name="option"
          value={Option.Paper}
          aria-label={Option.Paper}
        />
        <StyledOptionChip option={Option.Paper} />
      </S.OptionPickerItem>
      <S.OptionPickerItem htmlFor={Option.Rock}>
        <S.OptionPickerItemRadioInput
          type="radio"
          id={Option.Rock}
          name="option"
          value={Option.Rock}
          aria-label={Option.Rock}
        />
        <StyledOptionChip option={Option.Rock} />
      </S.OptionPickerItem>
      <S.OptionPickerItem htmlFor={Option.Scissors}>
        <S.OptionPickerItemRadioInput
          type="radio"
          id={Option.Scissors}
          name="option"
          value={Option.Scissors}
          aria-label={Option.Scissors}
        />
        <StyledOptionChip option={Option.Scissors} />
      </S.OptionPickerItem>
    </S.OptionPicker>
  )
}
