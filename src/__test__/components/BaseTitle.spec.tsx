import React from 'react'
import { render } from '@testing-library/react'
import BaseTitle from '../../components/BaseTitle'

describe('BaseTitle Component', () => {
  it('renders h1 tag correctly', () => {
    const { getByText } = render(
      <BaseTitle tag="h1" className="title-class">
        Hello, World!
      </BaseTitle>,
    )
    const titleElement = getByText('Hello, World!')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName).toBe('H1')
    expect(titleElement).toHaveClass('title-class')
  })

  it('renders h2 tag correctly', () => {
    const { getByText } = render(
      <BaseTitle tag="h2" className="subtitle-class">
        Welcome!
      </BaseTitle>,
    )
    const titleElement = getByText('Welcome!')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName).toBe('H2')
    expect(titleElement).toHaveClass('subtitle-class')
  })
})
