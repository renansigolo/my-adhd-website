import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

import Header from './components/Header'
import Features from './components/Features'
import Footer from './components/Footer'
import Downloads from './components/Downloads'

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
})

function App(props) {
  const { classes } = props
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Paper className={classes.root} elevation={2}>
        <Downloads />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Features />
      </Paper>
      <Footer />
    </React.Fragment>
  )
}

export default withStyles(styles)(App)
