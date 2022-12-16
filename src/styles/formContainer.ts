import styled from "styled-components";

export const FormContainer = styled.div`

        width: 100%;
        max-width: 377px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2.5rem;
        padding: 2.5rem 1rem;
        border: 2px solid ${({theme})=> theme.gray1};
        border-radius: 4px;

        form{
            
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            align-items: flex-start;
      

            button{
                margin-top: 1rem;
            }

            small{
                font-size: 1.4rem;
                color: ${({theme})=> theme.alert};;
            }
        }



        select{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1rem;
            font-size: 1.6rem;
            font-weight: 400;
            border-radius: 4px;
            background-color: var(--grey-2);
            color: var(--grey-1);
        }

        option{
            padding: 2rem;
            font-size: 1.6rem;
        }

  
        div{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        div > a{
            font-size: 1.2rem;
            color: ${({theme})=> theme.gray3};
        }

        p{
            text-align: center;
            line-height: 22px;
            font-size: 1.4rem;
            color: ${({theme})=> theme.gray3};
          
        }
`