import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import './App.scss'
import Footer from './components/Footer'
import Home from './pages/Home'
import theme from './utils/theme'

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Home />
          <Footer />
        </React.Fragment>
      </MuiThemeProvider>
    </div>
  )
}

export default App
