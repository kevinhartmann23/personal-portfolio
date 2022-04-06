import landingPhoto from '../../Assets/kev_dev.png'
import NavMenu from '../NavMenu/NavMenu'
import LinkMenu from '../LinkMenu/LinkMenu'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#262626',
    },
    secondary: {
      main: '#75887E',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavMenu />
        <img className="poster" src={landingPhoto} alt="Kevin Hartmann Intro" />
        <LinkMenu />
      </div>
    </ThemeProvider>
  )
}

export default App
