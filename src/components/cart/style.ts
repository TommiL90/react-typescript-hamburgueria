import styled from 'styled-components'

export const HeaderCart = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: #27ae60;
  color: #ffffff;
`
export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.gray0};
`

export const ProductsCart = styled.ul`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${({ theme }) => theme.gray0};
  margin-bottom: 3px sold ${({ theme }) => theme.gray1};
`

export const FooterCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.gray4};
  }

  p {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.gray3};
  }
`

export const StyledBox = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
  }
`
