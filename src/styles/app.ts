import styled from "styled-components";


export const Appcontainer = styled.div`

  height: 37vh;
  display: flex;
  justify-content: center;
  padding: 300px;

  background-color: ${({theme}) => theme.colorSecundary};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;
`;

export const MainSection = styled.div`
text-align: center;
`;

//background-color: ${(props) => props.theme.backgroundColor};