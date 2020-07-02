import { Box, Container, Typography, Grid } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import logo from '../logo.svg'

export default class Hero extends React.Component {
  render() {
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

            {/* <Typography
          variant="h3"
          component="h1"
          color="inherit"
          align="center"
          gutterBottom
        >
          <FormattedMessage id="hero.title" defaultMessage="MyADHD" />
        </Typography> */}

            <Typography
              variant="h3"
              component="h1"
              color="inherit"
              align="center"
              gutterBottom
            >
              <FormattedMessage
                id="hero.subtitle"
                defaultMessage="The first ADHD app with cognitive analysis!"
              />
            </Typography>
          </Container>
        </Grid>
      </section>
    )
  }
}
