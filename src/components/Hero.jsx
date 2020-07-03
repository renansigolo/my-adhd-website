import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import logo from '../logo.svg'

function Hero() {
  return (
    <section id="hero">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="hero-bg"
      >
        <Container maxWidth="sm">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img src={logo} className="hero-logo" alt="logo" />
          </Box>

          <Typography
            variant="h3"
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
              href="#download"
            >
              Download Now
            </Button>
          </Box>
        </Container>
      </Grid>
    </section>
  )
}

export default Hero
