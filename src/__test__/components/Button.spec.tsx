import { render } from '@testing-library/react'
import Button from '../../components/Button'

// Tests that the Button component is rendered with the text 'ButtonComponent'
it('should render the button component with the text ButtonComponent', () => {
  const { getByText } = render(<Button />)

  expect(getByText('ButtonComponent')).toBeInTheDocument()
})
