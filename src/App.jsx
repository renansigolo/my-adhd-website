import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactGA from 'react-ga'
import './App.scss'
import Footer from './components/Footer'
import Home from './pages/Home'
import theme from './utils/theme'

function initializeReactGA() {
  ReactGA.initialize('UA-82193310-7')
  ReactGA.pageview(window.location.pathname + window.location.search)
}

function EnvTag() {
  return (
    <div className="env-tag">
      <span>{process.env.NODE_ENV.toUpperCase()}</span>
    </div>
  )
}

function App() {
  let isProd

  if (process.env.NODE_ENV === 'production') {
    initializeReactGA()
    isProd = true
  } else {
    console.info('Environment Variables', process.env)
    isProd = false
  }

  return (
    <div className="landing">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        {isProd ? null : <EnvTag />}

        <Home />
        <Footer />
      </MuiThemeProvider>
    </div>
  )
}

export default App
