import styled from 'styled-components'

import { Button, ButtonVariant } from 'components'

const S = {
  Footer: styled.footer`
    margin: 5.2rem auto 0;
    padding: 0 3.2rem;
    max-width: 140rem;
    display: flex;
    justify-content: center;
    gap: 3rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      justify-content: flex-end;
    }
  `,
  RulesButton: styled(Button)`
    padding: 1rem 3.6rem;
  `,
}

export const Footer = () => {
  return (
    <S.Footer>
      <S.RulesButton variant={ButtonVariant.OUTLINED}>Rules</S.RulesButton>
    </S.Footer>
  )
}
