import { render } from '@testing-library/react'
import Header from '../../components/Header'
import { BrowserRouter } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }: { children: React.ReactNode }) => children,
}))

describe('Header Component', () => {
  it('should render the Header component', () => {
    const { container, queryByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    expect(container.querySelector('.containerHeader')).toBeInTheDocument()
    expect(queryByText('Limpar pesquisa')).toBeNull()
  })
})
