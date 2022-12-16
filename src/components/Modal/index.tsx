import React from 'react'
import { useOutClick } from '../../hooks/useOutClick'
import { Modal, ModalBox } from './style'

interface iModalDefault{
    children: React.ReactNode;
}

const ModalDefault = ({ children } : iModalDefault) => {


  return (
    <Modal>
        <ModalBox>
            { children }
        </ModalBox>
    </Modal>
  )
}

export default ModalDefault