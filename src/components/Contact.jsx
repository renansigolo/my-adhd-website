import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { FormattedHTMLMessage } from 'react-intl'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 5,
    justify: 'center',
    alignItems: 'center'
  },
  messageInput: {
    marginTop: 0
  }
})

function ContactForm(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        <FormattedHTMLMessage id="contact.title" />
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-name"
              label="Name"
              placeholder="Enter your name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-email"
              label="Email"
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-message"
              label="Message"
              placeholder="Enter your message"
              fullWidth
              multiline
              margin="normal"
              variant="outlined"
              className={classes.messageInput}
            />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <Button variant="contained" color="primary" size="large">
                <FormattedHTMLMessage id="contact.submit" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default withStyles(styles)(ContactForm)
