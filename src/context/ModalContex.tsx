import { createContext, useCallback, useContext, useMemo, useState } from 'react'

type ModalProviderProps = {
  children: React.ReactNode
}

export enum ModalName {
  Rules = 'rules',
}

interface ModalContextValue {
  modal: ModalName | null
  showModal: (modalName: ModalName) => void
  closeModal: () => void
}

const initialModalContextValue = {
  modal: null,
  showModal: () => null,
  closeModal: () => null,
}

const ModalContext = createContext<ModalContextValue>(initialModalContextValue)

export const useModalContext = () => useContext(ModalContext)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState<ModalName | null>(null)

  const showModal = useCallback((modalName: ModalName) => {
    setModal(modalName)
  }, [])

  const closeModal = useCallback(() => {
    setModal(null)
  }, [])

  const value = useMemo(
    () => ({
      modal,
      showModal,
      closeModal,
    }),
    [modal, showModal, closeModal]
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
