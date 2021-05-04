import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Hero() {
  return (
    <section id="hero">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={styles.hero__bg}
      >
        <Container maxWidth="sm">
          <Box display="flex" justifyContent="center" alignItems="center" p={4}>
            <Image src="/images/logo.svg" alt="logo" height={160} width={180} />
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
