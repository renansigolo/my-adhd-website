import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Alert, AlertTitle } from '@material-ui/lab'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'
import API from '../pages/api/api'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4, 0),
    justify: 'center',
    alignItems: 'center',
    minHeight: 400,
  },
  formControl: {
    minWidth: '100%',
  },
}))

function ContactForm() {
  const classes = useStyles()
  const router = useRouter()

  const { locale } = router

  // Assign add the translated fields to variables
  const intl = useIntl()
  const formatted = {
    name: {
      title: intl.formatMessage({ id: 'contact.form.name.title' }),
      placeholder: intl.formatMessage({ id: 'contact.form.name.placeholder' }),
      error: intl.formatMessage({ id: 'contact.form.name.error' }),
    },
    email: {
      title: intl.formatMessage({ id: 'contact.form.email.title' }),
      placeholder: intl.formatMessage({ id: 'contact.form.email.placeholder' }),
      error: intl.formatMessage({ id: 'contact.form.email.error' }),
    },
    language: {
      title: intl.formatMessage({ id: 'contact.form.language.title' }),
    },
    message: {
      title: intl.formatMessage({ id: 'contact.form.message.title' }),
      placeholder: intl.formatMessage({
        id: 'contact.form.message.placeholder',
      }),
      error: intl.formatMessage({ id: 'contact.form.message.error' }),
    },
  }

  const defaultValues = {
    language: locale.substring(0, 2),
  }

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues })

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

        <form onSubmit={handleSubmit(onSubmit)}>
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
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  type="text"
                  label={formatted.name.title}
                  placeholder={formatted.name.placeholder}
                  variant="outlined"
                  error={errors.name ? true : false}
                  {...register('name', { required: true, minLength: 3 })}
                />
                <p>{errors.name && formatted.name.error}</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="language-label">
                    {formatted.language.title}
                  </InputLabel>
                  <Controller
                    control={control}
                    name="language"
                    render={({ field }) => (
                      <Select label={formatted.language.title} {...field}>
                        <MenuItem value={'en'}>English</MenuItem>
                        <MenuItem value={'es'}>Español</MenuItem>
                        <MenuItem value={'pt'}>Português</MenuItem>
                      </Select>
                    )}
                  ></Controller>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  label={formatted.email.title}
                  placeholder={formatted.email.placeholder}
                  variant="outlined"
                  error={errors.email ? true : false}
                  {...register('email', {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                <p>{errors.email && formatted.email.error}</p>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  className={classes.messageInput}
                  fullWidth
                  multiline
                  id="message"
                  name="message"
                  variant="outlined"
                  label={formatted.message.title}
                  placeholder={formatted.message.placeholder}
                  error={errors.message ? true : false}
                  rows={4}
                  {...register('message', { required: true, minLength: 20 })}
                />
                <p>{errors.message && formatted.message.error}</p>
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
