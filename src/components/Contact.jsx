import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(4, 0),
    justify: 'center',
    alignItems: 'center',
  },
}))

function ContactForm() {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Container maxWidth="sm">
        <Box mb={3}>
          <Typography variant="h3" align="center" gutterBottom>
            <FormattedMessage id="contact.title" />
          </Typography>
          <Typography variant="subtitle1" component="p" align="center">
            <FormattedMessage id="contact.subtitle" />
          </Typography>
        </Box>
        <form noValidate autoComplete="off">
          <Grid container spacing={4}>
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
                variant="outlined"
                fullWidth
                multiline
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
      </Container>
    </section>
  )
}

export default ContactForm
