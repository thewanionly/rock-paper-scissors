import styled from 'styled-components'

import { useModalContext } from 'context'
import { Button, Modal } from 'components'

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
    flex-basis: 70%;
  `,
  SettingsItemLabel: styled.span`
    display: block;
    color: ${({ theme: { colors } }) => colors.settingsLabelText};
    text-transform: uppercase;
    line-height: 1.3rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.med1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    margin-bottom: 1rem;
  `,
  SettingsItemDescription: styled.span`
    display: block;
    color: ${({ theme: { colors } }) => colors.settingsLabelDescription};
    line-height: 1.3rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm2};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
  `,
  SettingsItemActionContainer: styled.div`
    flex-basis: 25%;
  `,
  ResetButton: styled(Button)`
    padding: 1rem 2rem;
  `,
}

export const SettingsModal = () => {
  const { closeModal } = useModalContext()

  return (
    <Modal title="Settings" onClose={closeModal}>
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
              <S.ResetButton>Reset</S.ResetButton>
            </S.SettingsItemActionContainer>
          </S.SettingsItem>
        </li>
      </S.SettingsList>
    </Modal>
  )
}
