import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5),
    justify: 'center',
    alignItems: 'center',
  },
  messageInput: {
    marginTop: 0,
  },
}))

function ContactForm() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        <FormattedMessage id="contact.title" />
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={5}>
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
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <Button variant="contained" color="primary" size="large">
                <FormattedMessage id="contact.submit" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default withStyles(styles)(ContactForm)
