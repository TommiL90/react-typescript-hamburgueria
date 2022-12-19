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

    .cart{
        position: relative;

        p{
            position: absolute;
            top: -15px;
            left: -9px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            font-size: 1.2rem;
            color: ${({theme})=> theme.gray0};;
            background-color: ${({theme})=> theme.primaryColor};
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