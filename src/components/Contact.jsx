import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Alert, AlertTitle } from '@material-ui/lab'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'
import API from '../services/api'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4, 0),
    justify: 'center',
    alignItems: 'center',
    minHeight: 400,
  },
}))

function ContactForm() {
  const classes = useStyles()

  // Assign add the translated fields to variables
  const intl = useIntl()
  const formatted = {
    name: {
      title: intl.formatMessage({ id: 'contact.form.name' }),
      placeholder: intl.formatMessage({ id: 'contact.form.placeholder.name' }),
    },
    email: {
      title: intl.formatMessage({ id: 'contact.form.email' }),
      placeholder: intl.formatMessage({ id: 'contact.form.placeholder.email' }),
    },
    message: {
      title: intl.formatMessage({ id: 'contact.form.message' }),
      placeholder: intl.formatMessage({
        id: 'contact.form.placeholder.message',
      }),
    },
  }

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit } = useForm()

  const onSubmit = (data, evt) => {
    setIsLoading(true)
    // Send a POST request to Firebase Cloud Function
    API.post('sendContactEmail', { ...data })
      .then(() => {
        setIsSuccess(true)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
        evt.target.reset() // reset after form submit
      })
  }

  return (
    <section id="contact" className={classes.root}>
      <Container maxWidth="sm">
        <Box mb={3}>
          <Typography variant="h3" align="center" gutterBottom>
            <FormattedMessage id="contact.title" />
          </Typography>
          <Typography variant="subtitle1" component="p" align="center">
            <FormattedMessage id="contact.subtitle" />
          </Typography>
        </Box>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          {isLoading ? (
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="300px"
              >
                <CircularProgress />
              </Box>
            </Grid>
          ) : (
            <Grid container spacing={4}>
              {isSuccess && (
                <Grid item xs={12}>
                  <Alert severity="success">
                    <AlertTitle>
                      <FormattedMessage id="contact.success" />
                    </AlertTitle>
                  </Alert>
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="name"
                  label={formatted.name.title}
                  name="name"
                  placeholder={formatted.name.placeholder}
                  type="text"
                  variant="outlined"
                  inputRef={register({
                    required: true,
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="email"
                  label={formatted.email.title}
                  name="email"
                  placeholder={formatted.email.placeholder}
                  type="email"
                  variant="outlined"
                  inputRef={register({
                    required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.messageInput}
                  fullWidth
                  id="message"
                  label={formatted.message.title}
                  multiline
                  name="message"
                  placeholder={formatted.message.placeholder}
                  rows={4}
                  variant="outlined"
                  inputRef={register({
                    required: true,
                  })}
                />
              </Grid>
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <Button
                    color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    <FormattedMessage id="contact.submit" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </form>
      </Container>
    </section>
  )
}

export default ContactForm
