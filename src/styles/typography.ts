import styled, { css } from 'styled-components'
import BaseTitle from '../components/BaseTitle'

interface iStyledTitleProps {
  fontSize: string
}

export const StyledTitle = styled(BaseTitle)<iStyledTitleProps>`
  font-weight: bold;
  ${({ fontSize }) => {
    switch (fontSize) {
      case 'h1':
        return css`
          font-size: 2.6rem;
        `
      case 'h2':
        return css`
          font-size: 2.2rem;
        `
      case 'h3':
        return css`
          font-size: 1.8rem;
        `
      case 'h4':
        return css`
          font-size: 1.4rem;
        `
    }
  }}
`
