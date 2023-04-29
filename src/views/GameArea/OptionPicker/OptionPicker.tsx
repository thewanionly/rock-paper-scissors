import { FormEvent } from 'react'
import styled, { css } from 'styled-components'

import { OptionChip } from 'components'
import { Mode, MoveOption } from 'types'
import invertedTriangle from 'assets/images/inverted_triangle.svg'
import pentagon from 'assets/images/pentagon.svg'

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

  .option-chip-icon {
    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      width: 7.2rem;
      height: 8.6rem;
    }
  }
`

const S = {
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
}

const CommonStyles = {
  OptionPicker: css`
    border: none;
    display: grid;
  `,
}

const StylesMap = {
  [Mode.RockPaperScissors]: {
    OptionPicker: styled.fieldset<OptionPickerStyleProps>`
      ${CommonStyles.OptionPicker}

      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      column-gap: 5.23rem;
      row-gap: 1.63rem;
      justify-items: center;
      background: url(${invertedTriangle}) no-repeat 50% 60%;

      @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
        column-gap: 8rem;
        row-gap: 2.4rem;
        background: url(${invertedTriangle}) no-repeat 50% 70%/70%;
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
    LizardOptionContainer: styled.label``,
    SpockOptionContainer: styled.label``,
  },
  [Mode.RockPaperScissorsLizardSpock]: {
    OptionPicker: styled.fieldset<OptionPickerStyleProps>`
      ${CommonStyles.OptionPicker}
      transform: scale(0.8);
      transform-origin: top;
      min-width: 37.5rem;

      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(7, 6rem);
      justify-items: center;
      background: url(${pentagon}) no-repeat 50% 50%/80%;

      @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
        grid-template-rows: repeat(7, 1fr);
        background: url(${pentagon}) no-repeat 50% 55%/80%;
      }
    `,
    PaperOptionContainer: styled.label`
      grid-column: 6 / 8;
      grid-row: 3 / 5;
    `,
    ScissorsOptionContainer: styled.label`
      grid-column: 3 / 6;
      grid-row: 1 / 3;
    `,
    RockOptionContainer: styled.label`
      grid-column: 5 / 7;
      grid-row: 6 / 8;
    `,
    LizardOptionContainer: styled.label`
      grid-column: 2 / 4;
      grid-row: 6 / 8;
    `,
    SpockOptionContainer: styled.label`
      grid-column: 1 / 3;
      grid-row: 3 / 5;
    `,
  },
}

type OptionPickerStyleProps = {
  isLizardSpockMode: boolean
}

type OptionPickerProps = {
  mode?: Mode
  onOptionPicked: (option: MoveOption) => void
}

export const OptionPicker = ({
  mode = Mode.RockPaperScissors,
  onOptionPicked,
}: OptionPickerProps) => {
  const handleOptionPicked = (event: FormEvent<HTMLFieldSetElement>) => {
    const { value } = event.target as HTMLInputElement

    onOptionPicked(value as MoveOption)
  }

  const SM = StylesMap[mode]

  return (
    <SM.OptionPicker
      onChange={handleOptionPicked}
      isLizardSpockMode={mode === Mode.RockPaperScissorsLizardSpock}
    >
      <SM.PaperOptionContainer htmlFor={MoveOption.Paper}>
        <S.OptionPickerItemRadioInput
          type="radio"
          id={MoveOption.Paper}
          name="option"
          value={MoveOption.Paper}
          aria-label={MoveOption.Paper}
        />
        <StyledOptionChip option={MoveOption.Paper} />
      </SM.PaperOptionContainer>
      <SM.ScissorsOptionContainer htmlFor={MoveOption.Scissors}>
        <S.OptionPickerItemRadioInput
          type="radio"
          id={MoveOption.Scissors}
          name="option"
          value={MoveOption.Scissors}
          aria-label={MoveOption.Scissors}
        />
        <StyledOptionChip option={MoveOption.Scissors} />
      </SM.ScissorsOptionContainer>
      <SM.RockOptionContainer htmlFor={MoveOption.Rock}>
        <S.OptionPickerItemRadioInput
          type="radio"
          id={MoveOption.Rock}
          name="option"
          value={MoveOption.Rock}
          aria-label={MoveOption.Rock}
        />
        <StyledOptionChip option={MoveOption.Rock} />
      </SM.RockOptionContainer>
      {mode === Mode.RockPaperScissorsLizardSpock && (
        <>
          <SM.LizardOptionContainer htmlFor={MoveOption.Lizard}>
            <S.OptionPickerItemRadioInput
              type="radio"
              id={MoveOption.Lizard}
              name="option"
              value={MoveOption.Lizard}
              aria-label={MoveOption.Lizard}
            />
            <StyledOptionChip option={MoveOption.Lizard} />
          </SM.LizardOptionContainer>
          <SM.SpockOptionContainer htmlFor={MoveOption.Spock}>
            <S.OptionPickerItemRadioInput
              type="radio"
              id={MoveOption.Spock}
              name="option"
              value={MoveOption.Spock}
              aria-label={MoveOption.Spock}
            />
            <StyledOptionChip option={MoveOption.Spock} />
          </SM.SpockOptionContainer>
        </>
      )}
    </SM.OptionPicker>
  )
}
