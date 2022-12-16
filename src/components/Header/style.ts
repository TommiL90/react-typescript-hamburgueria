import styled from "styled-components";

export const StyledHeader = styled.header`

    width: 100%;
    min-height: 80px;
    height: max-content;
    display: flex;
    align-items: center;
    background-color: ${({ theme })=> theme.gray1 };

    & > .containerHeader {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;

       
    }

    .containerHeader > div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    &  nav{
        display: flex;
        gap: 2rem;
        width: max-content;
    }

    @media (min-width: 750px) {
        .containerHeader{
            flex-direction: row;
        }
    }
`

export const IconBtn = styled.button`

    font-size: 2rem;
    color: ${({ theme })=> theme.gray3 };

    &:hover{

        color: ${({ theme })=> theme.gray4 };
    };

`