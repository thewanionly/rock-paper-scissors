import styled from 'styled-components'

import { useGameContext, useModalContext } from 'context'
import { Button, ButtonColor, Modal } from 'components'

const S = {
  SettingsList: styled.ul`
    width: 100%;
    color: black;
    list-style-type: none;
  `,
  SettingsItem: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  `,
  SettingsItemLabelContainer: styled.div`
    flex-basis: 60%;
  `,
  SettingsItemLabel: styled.span`
    display: block;
    color: ${({ theme: { colors } }) => colors.settingsLabelText};
    text-transform: uppercase;
    line-height: 1.6rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    margin-bottom: 1rem;
  `,
  SettingsItemDescription: styled.span`
    display: block;
    color: ${({ theme: { colors } }) => colors.settingsLabelDescription};
    line-height: 1.3rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
  `,
  SettingsItemActionContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  ResetButton: styled(Button)`
    padding: 0.8rem 1.3rem;
    line-height: 1.3rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm1};
    letter-spacing: 0.1rem;
  `,
}

export const SettingsModal = () => {
  const { closeModal } = useModalContext()
  const { resetScore } = useGameContext()

  const handleCloseModal = () => {
    closeModal()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleResetButtonClick = () => {
    resetScore()
    handleCloseModal()
  }

  return (
    <Modal title="Settings" onClose={handleCloseModal}>
      <S.SettingsList>
        <li>
          <S.SettingsItem>
            <S.SettingsItemLabelContainer>
              <S.SettingsItemLabel>Reset score</S.SettingsItemLabel>
              <S.SettingsItemDescription>
                This will reset your score back to zero.
              </S.SettingsItemDescription>
            </S.SettingsItemLabelContainer>
            <S.SettingsItemActionContainer>
              <S.ResetButton color={ButtonColor.DANGER} onClick={handleResetButtonClick}>
                Reset
              </S.ResetButton>
            </S.SettingsItemActionContainer>
          </S.SettingsItem>
        </li>
      </S.SettingsList>
    </Modal>
  )
}
