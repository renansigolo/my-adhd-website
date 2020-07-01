import { CssBaseline, Grid, MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import './App.css'
import Download from './components/Download'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import theme from './utils/theme'

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="hero-bg"
          >
            <Hero />
          </Grid>

          <Download />

          <Features />

          <Footer />
        </React.Fragment>
      </MuiThemeProvider>
    </div>
  )
}

export default App
