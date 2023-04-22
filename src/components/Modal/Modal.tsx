import styled from 'styled-components'

import { Icon, IconName } from 'components/Icon'

const S = {
  Modal: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    background-color: ${({ theme: { colors } }) => colors.modalBg};
    box-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};
    width: 100%;
    height: 100vh;
    padding: 9.5rem 5rem 7rem;
    display: grid;
    grid-template-areas:
      'title'
      'body'
      'close';
    grid-template-rows: max-content 1fr max-content;
    gap: 11.3rem;
    justify-items: center;
    align-items: flex-start;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      border-radius: 0.8rem;
    }
  `,
  ModalTitle: styled.h1`
    grid-area: title;

    text-transform: uppercase;
    line-height: 3.2rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.med3};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    color: ${({ theme: { colors } }) => colors.modalTitle};
  `,
  ModalCloseButton: styled(Icon)`
    grid-area: close;
    align-self: flex-end;

    color: ${({ theme: { colors } }) => colors.modalCloseButton};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: ${({ theme: { colors } }) => colors.modalCloseButtonHover};
    }
  `,
  ModalContent: styled.div``,
}

type ModalProps = {
  title: string
  children: React.ReactNode
  onClose: () => void
}

export const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <S.Modal>
      <S.ModalTitle>{title}</S.ModalTitle>
      <S.ModalCloseButton name={IconName.CLOSE} aria-label="close icon" onClick={onClose} />
      <S.ModalContent data-testid="modal-content">{children}</S.ModalContent>
    </S.Modal>
  )
}
