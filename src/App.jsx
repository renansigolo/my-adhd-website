import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactGA from 'react-ga'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
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

        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="*">
              <Redirect to="" />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  )
}

export default App
