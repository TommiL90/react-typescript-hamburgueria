import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import LoginPage from '../../pages/LoginPage'
import { api } from '../../services/api'
import MockAdapter from 'axios-mock-adapter'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }: { children: React.ReactNode }) => children,
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

const apiMock = new MockAdapter(api)

describe('loginPage', () => {
  it('should render the loginPage', () => {
    render(<LoginPage />)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('should be able to login', async () => {
    render(<LoginPage />)

    apiMock.onPost('/login').replyOnce(200, {})

    const emailField = screen.getByPlaceholderText('Digite seu Email')
    const passwordField = screen.getByPlaceholderText('Digite sua senha')
    const buttonElement = screen.getByText('Logar')

    fireEvent.change(emailField, { target: { value: 'example@gmail.com' } })
    fireEvent.change(passwordField, { target: { value: 'T123456' } })
    fireEvent.click(buttonElement)

    await waitFor(() => {
      expect(emailField).toHaveValue('example@gmail.com')
      expect(passwordField).toHaveValue('T123456')
      expect(mockHistoryPush).toHaveBeenCalledWith('/home')
    })
  })
})
