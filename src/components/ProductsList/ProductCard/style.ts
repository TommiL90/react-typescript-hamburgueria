import styled from "styled-components";

export const StyledProductCard = styled.li`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
    height: 320px;
    background: ${({theme})=> theme.gray0};
    border: 2px solid ${({theme})=> theme.gray1};
    border-radius: 5px;

    img{
        width: 100%;
        height: 45%;
        object-fit: scale-down;
        background-color: ${({theme})=> theme.gray1};
        border-radius: 5px 5px 0 0;
    }

    div{
        width: 100%;
        height: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }



    small{
        font-size: 1.2rem;
        color: ${({theme})=> theme.gray3};
    }

    p{
    font-size: 1.4rem;
    font-weight: bold;
    color: ${({theme})=> theme.primaryColor};
    }
`