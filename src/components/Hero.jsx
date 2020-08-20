import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import logo from '../assets/logo.svg'

function Hero() {
  return (
    <section id="hero">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="landing-hero__bg"
      >
        <Container maxWidth="sm">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img src={logo} className="landing-hero__logo" alt="logo" />
          </Box>

          <Typography
            variant="h4"
            component="h1"
            color="inherit"
            align="center"
            gutterBottom
          >
            <FormattedMessage
              id="hero.title"
              defaultMessage="The first ADHD app with cognitive analysis!"
            />
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/#download"
            >
              <FormattedMessage
                id="download.title"
                defaultMessage="Download Now"
              />
            </Button>
          </Box>
        </Container>
      </Grid>
    </section>
  )
}

export default Hero
