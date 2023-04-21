import styled from 'styled-components'

const S = {
  Footer: styled.footer`
    margin: 6rem 3rem;
    padding: 2rem;

    display: flex;
    justify-content: center;
    gap: 3rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      justify-content: flex-end;
    }
  `,
}

export const Footer = () => {
  return (
    <S.Footer>
      <span>Footer</span>
    </S.Footer>
  )
}
