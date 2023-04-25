import styled from 'styled-components'

import { useGameContext, useModalContext } from 'context'
import { Button, ButtonColor, Modal } from 'components'
import React from 'react'

const S = {
  SettingsList: styled.ul`
    width: 100%;
    color: black;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
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
    line-height: 1.4rem;
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

type SettingsItemProps = {
  label: string
  description: string
  actionComponent: React.ReactElement
}

const SettingsItem = ({ label, description, actionComponent }: SettingsItemProps) => {
  return (
    <S.SettingsItem>
      <S.SettingsItemLabelContainer>
        <S.SettingsItemLabel>{label}</S.SettingsItemLabel>
        <S.SettingsItemDescription>{description}</S.SettingsItemDescription>
      </S.SettingsItemLabelContainer>
      <S.SettingsItemActionContainer>{actionComponent}</S.SettingsItemActionContainer>
    </S.SettingsItem>
  )
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
          <SettingsItem
            label="Reset score"
            description="This will reset your score back to zero."
            actionComponent={
              <S.ResetButton color={ButtonColor.DANGER} onClick={handleResetButtonClick}>
                Reset
              </S.ResetButton>
            }
          />
        </li>
        <li>
          <SettingsItem
            label={`Enable "Lizard-Spock" mode`}
            description={`This will change the game mode to "lizard-spock". Take note that this will reset your score in your current game mode.`}
            actionComponent={<span>Enable</span>}
          />
        </li>
      </S.SettingsList>
    </Modal>
  )
}
