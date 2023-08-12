import styled from 'styled-components'

export const StyledFormSearch = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 365px;
  width: 100%;
  height: 60px;
  padding: 0 1rem;
  border: 2px solid ${({ theme }) => theme.gray1};
  background-color: ${({ theme }) => theme.gray0};
  border-radius: 8px;

  &:input:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }

  input {
    width: 60%;
    height: 100%;
    border: none;
    background-color: ${({ theme }) => theme.gray0};
    color: ${({ theme }) => theme.gray4};
    font-weight: 500;
    font-size: 1.8rem;
  }

  input::placeholder {
    color: ${({ theme }) => theme.gray3};
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  button {
    width: 35%;
    height: 40px;
    font-size: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    color: ${({ theme }) => theme.gray1};
    background: ${({ theme }) => theme.primaryColor};
    border: 2px solid ${({ theme }) => theme.primaryColor};
    border-radius: 8px;
  }

  button:hover {
    background: ${({ theme }) => theme.primaryHoverColor};
    border: 2px solid ${({ theme }) => theme.primaryHoverColor};
  }
`
