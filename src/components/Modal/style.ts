import styled from 'styled-components'

export const Modal = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background: rgba(0, 0, 0, 0.25);
`

export const ModalBox = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 1rem;
  border-radius: 4px;
`
