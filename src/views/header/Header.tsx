import styled from 'styled-components'

const S = {
  Header: styled.header`
    border: 3px solid ${({ theme: { colors } }) => colors.headerBorder};
    border-radius: 5px;
    padding: 0.9rem;
    margin: 0 auto;
    margin-top: 3.2rem;
    width: 83%;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      border-radius: 15px;
      padding: 1.5rem 2.1rem;
      margin-top: 4.8rem;
      max-width: 70rem;
    }
  `,
  HeaderTitle: styled.h1`
    padding: 1.2rem;
    line-height: 1.6rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.med1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    white-space: pre-line;
    text-transform: uppercase;
    text-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.headerTextShadow};
    user-select: none;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      padding: 0.6rem 0.8rem;
      line-height: 3.2rem;
      font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
    }
  `,
}
export const Header = () => {
  return (
    <S.Header>
      <S.HeaderTitle>
        Rock{'\n'}
        Paper{'\n'}
        Scissors
      </S.HeaderTitle>
    </S.Header>
  )
}
