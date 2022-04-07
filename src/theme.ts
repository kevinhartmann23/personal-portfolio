import {  createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#262626',
    },
    secondary: {
      main: '#75887E',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Fjalla One', sans- serif"
    },
    h2: {
      fontFamily: "'Fjalla One', sans- serif"
    },
    h3: {
      fontFamily: "'Fjalla One', sans- serif"
    },
    h4: {
      fontFamily: "'Fjalla One', sans- serif"
    },
    h5: {
      fontFamily: "'Fjalla One', sans- serif"
    },
    h6: {
      fontFamily: "'Fjalla One', sans- serif"
    },
    body1: {
      fontFamily: "'Cutive Mono', monospace"
    }, 
    body2: { 
      fontFamily: "'Cutive Mono', monospace"
    },
    subtitle1: {
      fontFamily: "'Cutive Mono', monospace"
    },
    subtitle2: {
      fontFamily: "'Cutive Mono', monospace"
    },
  }
})

export default theme