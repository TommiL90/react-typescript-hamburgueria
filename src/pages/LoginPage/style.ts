import styled from 'styled-components'

export const StyledLoginPage = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem 0;

  background-color: ${({ theme }) => theme.grey0};
`

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: 750px) {
    flex-direction: row-reverse;
    gap: 6rem;
  }
`

export const LoginPageSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 750px) {
    width: max-content;
  }
`

export const LoginPageDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 377px;
  height: 95px;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.gray1};
  border-radius: 4px;

  & > div {
    width: 60px;
    height: 60px;
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #27ae5f47;
    color: ${({ theme }) => theme.primaryColor};
    border-radius: 4px;
  }

  & > p {
    font-size: var(--font-text-2);
    width: 73%;
    line-height: 22px;
    color: ${({ theme }) => theme.gray3};
  }
`
