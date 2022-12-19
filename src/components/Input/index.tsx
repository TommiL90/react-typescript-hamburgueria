
import { forwardRef, InputHTMLAttributes } from "react"
import { StyledFieldset } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    legend?: string;
}


const Input = forwardRef<HTMLInputElement, InputProps>(({ legend, type, placeholder, ...rest }, ref) => {
  return (
    <StyledFieldset>
        { legend && <legend>{legend}</legend> }
        <input type={type} placeholder={placeholder} ref={ref} {...rest} />
    </ StyledFieldset>
     
  )
})

export default Input

// onChange={(event) => callback(event.target.value

/* alt =>
interface InputProps{
  legen?: string;
  register: UseFormRegisterReturn;

}

no Input => register={register("algo")}
<input {...register} />

*/