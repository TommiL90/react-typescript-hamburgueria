
import { Dispatch, InputHTMLAttributes, SetStateAction } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    label?: string;
    type: string;
    id: string;
    name: string;
    callback: Dispatch<SetStateAction<string>> 

}


const Input = ({ id, label, type, placeholder, name, callback } : InputProps) => {
  return (
    <fieldset>
        { label && <label htmlFor={id}>{label}</label> }
        <input id={id} type={type} placeholder={placeholder} value={name} onChange={(event) => callback(event.target.value)} required/>
    </ fieldset>
    
  )
}

export default Input

// onChange={(event) => callback(event.target.value