import styled from "styled-components";

export const StyledProductsList = styled.ul`

        display: flex;
        width: 100vw;
        overflow-x: scroll;
        padding: 1rem;
        gap: 1rem;


    @media (min-width: 750px){
       
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;   
        width: 100%;
        overflow-x: hidden;
   }
`