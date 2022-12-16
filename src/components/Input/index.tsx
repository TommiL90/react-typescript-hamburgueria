
import { Dispatch, InputHTMLAttributes, SetStateAction } from "react"
import { StyledFieldset } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    legend?: string;
    type: string;
    register: any;

}


const Input = ({ legend, type, placeholder, register } : InputProps) => {
  return (
    <StyledFieldset>
        { legend && <legend>{legend}</legend> }
        <input type={type} placeholder={placeholder} {...register} />
    </ StyledFieldset>
    
  )
}

export default Input

// onChange={(event) => callback(event.target.value