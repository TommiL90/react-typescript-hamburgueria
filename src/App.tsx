import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import RoutesMain from './Routes'
import { themes } from './styles/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from './contexts/UserContext'

function App(): JSX.Element {
  const { currentTheme } = useContext(UserContext)

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        {/* <StyledButton onClick={() => setCurrentTheme(getOpositeTheme())}>
          switch to {getOpositeTheme()} mode
        </StyledButton> */}

        <RoutesMain />
      </ThemeProvider>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
