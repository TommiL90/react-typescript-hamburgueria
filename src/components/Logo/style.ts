import styled from 'styled-components'

export const LogoContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: baseline;
`

export const LogoBurguer = styled.h1`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.gray4};
`

export const LogoKenzie = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.secundaryColor};
`
