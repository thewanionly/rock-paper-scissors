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
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  :focus {
    ${optionChipHover}
  }
`

const S = {
  OptionPicker: styled.fieldset`
    border: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 5.23rem;
    row-gap: 1.63rem;
    justify-items: center;
  `,
  OptionPickerItemRadioInput: styled.input`
    position: absolute;
    /* hide native radio input while still keeping it technically accessible */
    appearance: none;
    margin: 0;

    &:focus-visible {
      + ${StyledOptionChip} {
        ${optionChipHover}
      }
    }
  `,
  PaperOptionContainer: styled.label`
    grid-column: 1;
    grid-row: 1;
  `,
  ScissorsOptionContainer: styled.label`
    grid-column: 2;
    grid-row: 1;
  `,
  RockOptionContainer: styled.label`
    grid-column: 1 / span 2;
    grid-row: 2;
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
      <S.PaperOptionContainer htmlFor={Option.Paper}>
        <S.OptionPickerItemRadioInput
          type="radio"
          id={Option.Paper}
          name="option"
          value={Option.Paper}
          aria-label={Option.Paper}
        />
        <StyledOptionChip option={Option.Paper} />
      </S.PaperOptionContainer>
      <S.ScissorsOptionContainer htmlFor={Option.Scissors}>
        <S.OptionPickerItemRadioInput
          type="radio"
          id={Option.Scissors}
          name="option"
          value={Option.Scissors}
          aria-label={Option.Scissors}
        />
        <StyledOptionChip option={Option.Scissors} />
      </S.ScissorsOptionContainer>
      <S.RockOptionContainer htmlFor={Option.Rock}>
        <S.OptionPickerItemRadioInput
          type="radio"
          id={Option.Rock}
          name="option"
          value={Option.Rock}
          aria-label={Option.Rock}
        />
        <StyledOptionChip option={Option.Rock} />
      </S.RockOptionContainer>
    </S.OptionPicker>
  )
}
