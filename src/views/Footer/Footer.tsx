import styled from 'styled-components'

import { Button, ButtonVariant, Icon, IconName } from 'components'
import { ModalName, useModalContext } from 'context'

const S = {
  Footer: styled.footer`
    margin: 5.2rem auto 0;
    padding: 3.2rem;
    padding-top: 0;
    max-width: 140rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      flex-direction: row;
      justify-content: flex-end;
    }
  `,
  RulesButton: styled(Button)`
    padding: 1rem 3.6rem;
  `,
  SettingsIcon: styled(Icon)`
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    color: ${({ theme: { colors } }) => colors.settingsIcon};
    transition: all 0.2s;

    &:hover {
      color: ${({ theme: { colors } }) => colors.settingsIconHover};
    }
  `,
}

export const Footer = () => {
  const { showModal } = useModalContext()

  const handleOpenRulesModal = () => {
    showModal(ModalName.Rules)
  }

  const handleOpenSettingsModal = () => {
    showModal(ModalName.Settings)
  }

  return (
    <S.Footer>
      <S.RulesButton variant={ButtonVariant.OUTLINED} onClick={handleOpenRulesModal}>
        Rules
      </S.RulesButton>
      <S.SettingsIcon name={IconName.SETTINGS} onClick={handleOpenSettingsModal} />
    </S.Footer>
  )
}
