import { forwardRef, InputHTMLAttributes, Ref } from 'react'
import { StyledFieldset } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  legend?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ legend, type, placeholder, ...rest }, ref: Ref<HTMLInputElement>) => {
    return (
      <StyledFieldset>
        {legend && <legend>{legend}</legend>}
        <input type={type} placeholder={placeholder} ref={ref} {...rest} />
      </StyledFieldset>
    )
  },
)

Input.displayName = 'Input'
export default Input
