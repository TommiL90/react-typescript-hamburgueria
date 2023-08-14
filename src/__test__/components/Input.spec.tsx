import { render, screen } from '@testing-library/react'
import Input from '../../components/Input'

describe('Input Component', () => {
  it('renders input with type text', () => {
    const { container } = render(<Input type="text" />)
    const inputElement = container.querySelector('input')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement?.getAttribute('type')).toBe('text')
  })

  it('renders input with placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter something" />,
    )
    const inputElement = getByPlaceholderText('Enter something')
    expect(inputElement).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter something')).toBeTruthy()
  })

  it('renders input with legend', () => {
    const { getByText } = render(<Input legend="Field Legend" />)
    const legendElement = getByText('Field Legend')
    expect(legendElement).toBeInTheDocument()
  })

  it('does not render legend if not provided', () => {
    const { queryByTestId } = render(<Input />)
    const legendElement = queryByTestId('legend')
    // Assuming 'legend' has a test ID
    expect(legendElement).toBeNull()
  })

  it('has the correct displayName', () => {
    expect(Input.displayName).toBe('Input')
  })
})
