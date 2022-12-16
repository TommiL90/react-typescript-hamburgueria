import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
   
        width: 100%;
        height: 60px;
        border: 2px solid ${({theme})=> theme.gray3};
        border-radius: 4px;

        &:focus{
            border: 2px solid ${({theme})=> theme.gray4};
        }

        legend{
            font-size: 1.3rem;
            color: ${({theme})=> theme.gray3};
            margin-left: 1rem;

        }

        input{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1rem;
            font-size: 1.6rem;
            font-weight: 400;
            background-color: transparent;

        }

        input:focus{
            color: var(--grey-0);
        }
`