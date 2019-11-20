import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'
import logo from '../logo.svg'

export default class Header extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="Header-bg"
      >
        <img src={logo} className="Header-logo" alt="logo" />
        <Typography variant="h2" component="h1" color="inherit" gutterBottom>
          <FormattedHTMLMessage
            id="header.title"
            defaultMessage="The first ADHD app with cognitive analysis!"
          />
        </Typography>
      </Grid>
    )
  }
}
