import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default class Footer extends React.Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="caption" gutterBottom>
          &copy; {1900 + new Date().getYear()}, proudly made in Australia by
          Renan Sigolo.
        </Typography>
      </Grid>
    )
  }
}
