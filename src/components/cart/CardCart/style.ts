import styled from 'styled-components'

export const StyledCard = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;

  .infoContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    & > div {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  h3 {
    font-size: 1.4rem;
  }

  img {
    width: 80px;
    background-color: #e0e0e0;
    border-radius: 4px;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 33px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;

    button {
      width: 33px;
      height: 33px;
      background-color: #e0e0e0;
      font-size: 22px;
      font-weight: 400;
      color: red;
    }

    p {
      width: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }
  }

  .trash {
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 8px;
    padding-right: 6px;
    color: ${({ theme }) => theme.gray3};
  }
`
