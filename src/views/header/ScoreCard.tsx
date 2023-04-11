import styled from 'styled-components'

const S = {
  ScoreCard: styled.div`
    background: ${({ theme: { colors } }) =>
      `linear-gradient(0deg, ${colors.scoreCardBg} 0%, ${colors.scoreCardBgLight} 100%)`};
    border-radius: 4px;
    box-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};
    padding: 1rem;
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      padding: 1.6rem;
      width: 15rem;
    }
  `,
  ScoreLabel: styled.span`
    line-height: 1.2rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
    letter-spacing: 0.15625rem;
    text-transform: uppercase;
    color: ${({ theme: { colors } }) => colors.scoreLabelText};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      line-height: 1.9rem;
      font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
      letter-spacing: 0.25rem;
    }
  `,
  ScoreValue: styled.span`
    color: ${({ theme: { colors } }) => colors.scoreValueText};
    line-height: 4rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      line-height: 6.4rem;
      font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
    }
  `,
}

type ScoreCardProps = {
  className?: string
  score?: number
}

export const ScoreCard = ({ className = '', score = 0 }: ScoreCardProps) => (
  <S.ScoreCard className={className}>
    <S.ScoreLabel>Score</S.ScoreLabel>
    <S.ScoreValue data-testid="score-value">{score}</S.ScoreValue>
  </S.ScoreCard>
)
