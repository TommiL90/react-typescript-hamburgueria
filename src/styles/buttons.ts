import styled, { css } from "styled-components";

interface IStyledButtonProps{
    buttonSize: string;
    buttonStyle: string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: .25s; 
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({theme})=> theme.gray1};

    /* &:hover{
        filter: brightness(1.2);   
    } */
    ${({buttonSize}) => {
        switch(buttonSize){
            case "default":
                return css`
                   
                    width: 100%;
                    height: 60px;
                     
                `
            case "medium":
                return css`
                    width: 106px;
                    height: 40px;
                ` 
            case "small":
                return css`
                    width: 80px;
                    height: 32px;
                    
                `
            case "vSmall":
                return css`
                    width: 33px;
                    height: 32px;
                    
                `           
        }
    }}
    ${({buttonStyle}) => {
        switch(buttonStyle){
            case "solidPrimary":
                return css`
                    background: ${({theme})=> theme.primaryColor};
                    border-color: ${({theme})=> theme.primaryColor};
            
                    &:hover{
                        background: ${({theme})=> theme.primaryHoverColor};
                        border-color: ${({theme})=> theme.primaryHoverColor};   
                    }
                `  
                
            case "outline1":
                return css`
                    background: ${({theme})=> theme.gray1};
                    border-color: ${({theme})=> theme.gray1};
                    color: ${({theme})=> theme.gray3};
                    &:hover{
                        background: ${({theme})=> theme.primaryHoverColor};
                        border-color: ${({theme})=> theme.primaryHoverColor}; 
                        color: ${({theme})=> theme.gray1};  
                    }
                `    
            case "outline2":
                return css`
                    background:${({theme})=> theme.gray1};
                    border-color: ${({theme})=> theme.gray1};
                    color: ${({theme})=> theme.gray3};
                    &:hover{
                        background: ${({theme})=> theme.primaryHoverColor};
                        border-color: ${({theme})=> theme.primaryHoverColor};   
                        color: ${({theme})=> theme.gray1};
                    }
                `    
            
        }
    }}
    
`