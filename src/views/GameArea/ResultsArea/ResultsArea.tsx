import { useGameContext } from 'context'
import styled from 'styled-components'

import { OptionChip } from 'components'

const S = {
  ResultsArea: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    max-width: 40rem;
    min-width: 30rem;
    width: 80%;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      min-width: 70rem;
      max-width: none;
      width: max-content;
    }
  `,
  ResultsAreaPickedContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      gap: 6.3rem;
    }
  `,
  ResultsAreaOptionChipContainer: styled.div`
    width: 13rem;
    height: 13.3rem;
    display: grid;
    align-items: center;
    justify-items: center;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      width: 29.3rem;
      height: 30rem;
    }

    &::before {
      content: '';
      grid-column: 1;
      grid-row: 1;
      background-color: ${({ theme: { colors } }) => colors.resultsOptionChipPlaceholderBg};
      border-radius: 50%;
      width: 11rem;
      height: 11rem;

      @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
        width: 22.5rem;
        height: 22.5rem;
      }
    }
  `,
  ResultsAreaOptionChip: styled(OptionChip)`
    grid-column: 1;
    grid-row: 1;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      width: 29.3rem;
      height: 30rem;
    }

    .option-chip-icon {
      @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
        width: 10.8rem;
        height: 12.5rem;
      }
    }
  `,
  ResultsAreaPickedText: styled.span`
    line-height: 3.2rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm2};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1875rem;
    color: ${({ theme: { colors } }) => colors.resultsPickedText};
    text-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      letter-spacing: 0.3rem;
      font-size: ${({ theme: { fontSizes } }) => fontSizes.med2};
      order: -1;
    }
  `,
}

export const ResultsArea = () => {
  const { playerPick, housePick } = useGameContext()

  return (
    <S.ResultsArea>
      <S.ResultsAreaPickedContainer>
        <S.ResultsAreaOptionChipContainer>
          {playerPick && <S.ResultsAreaOptionChip option={playerPick} />}
        </S.ResultsAreaOptionChipContainer>
        <S.ResultsAreaPickedText>You picked</S.ResultsAreaPickedText>
      </S.ResultsAreaPickedContainer>
      <S.ResultsAreaPickedContainer>
        <S.ResultsAreaOptionChipContainer>
          {housePick && <S.ResultsAreaOptionChip option={housePick} />}
        </S.ResultsAreaOptionChipContainer>
        <S.ResultsAreaPickedText>The house picked</S.ResultsAreaPickedText>
      </S.ResultsAreaPickedContainer>
    </S.ResultsArea>
  )
}
