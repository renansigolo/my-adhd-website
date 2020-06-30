import { CssBaseline, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import './App.css'
import Downloads from './components/Downloads'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    margin: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
})

function App(props) {
  return (
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

      <Downloads />

      <Features />

      <Footer />
    </React.Fragment>
  )
}

export default withStyles(styles)(App)
