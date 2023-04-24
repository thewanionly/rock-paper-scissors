import styled from 'styled-components'

import { Icon, IconName } from 'components/Icon'

const S = {
  Modal: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme: { colors } }) => colors.modalOverlay};
  `,
  ModalContent: styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.modalBg};
    box-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};
    padding: 9.5rem 5rem 7rem;

    display: grid;
    grid-template-areas:
      'title'
      'body'
      'close';
    grid-template-rows: repeat(3, max-content);
    gap: 11.3rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      border-radius: 0.8rem;
      width: max-content;
      min-width: 40rem;
      height: max-content;
      padding: 3.2rem;
      grid-template-areas:
        'title close'
        'body body';
      grid-template-rows: max-content 1fr;
      row-gap: 4.8rem;
    }
  `,
  ModalTitle: styled.h1`
    grid-area: title;
    justify-self: center;
    align-self: flex-start;

    text-transform: uppercase;
    line-height: 3.2rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.med3};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    color: ${({ theme: { colors } }) => colors.modalTitle};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      justify-self: flex-start;
    }
  `,
  ModalCloseButton: styled(Icon)`
    grid-area: close;
    align-self: flex-end;
    justify-self: center;

    color: ${({ theme: { colors } }) => colors.modalCloseButton};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: ${({ theme: { colors } }) => colors.modalCloseButtonHover};
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
      justify-self: flex-end;
    }
  `,
  ModalBody: styled.div`
    grid-area: body;
  `,
}

type ModalProps = {
  className?: string
  title: string
  children: React.ReactNode
  onClose: () => void
}

export const Modal = ({ className = '', title, children, onClose }: ModalProps) => {
  return (
    <S.Modal className={className}>
      <S.ModalContent>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalCloseButton name={IconName.CLOSE} aria-label="close icon" onClick={onClose} />
        <S.ModalBody className="modal-body" data-testid="modal-content">
          {children}
        </S.ModalBody>
      </S.ModalContent>
    </S.Modal>
  )
}
