import styled from 'styled-components'

export const StyledRegisterPage = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 2rem 0;

  background-color: ${({ theme }) => theme.grey0};
`

export const RegisterPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`

export const RegisterPageSection = styled.section`
  width: 100%;
  display: none;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 750px) {
    display: flex;
    width: max-content;
  }
`

export const RegisterPageDiv = styled.div`
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
