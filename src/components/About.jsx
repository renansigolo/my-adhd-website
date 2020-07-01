import { Box, Container, Typography } from '@material-ui/core'
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

function About() {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Container maxWidth="sm">
        <Box mb={3}>
          <Typography variant="h3" align="center" gutterBottom>
            <FormattedMessage id="about.title" />
          </Typography>
          <Typography variant="subtitle1" component="p" align="center">
            <FormattedMessage id="about.text" />
          </Typography>
          <Typography variant="subtitle1" component="p" align="center">
            <FormattedMessage id="about.text2" />
          </Typography>
        </Box>

        {/* <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" component="p" align="center">
              <FormattedMessage id="about.text2" />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" component="p" align="center">
              <FormattedMessage id="about.text3" />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" component="p" align="center">
              <FormattedMessage id="about.text3" />
            </Typography>
          </Grid>
        </Grid> */}
      </Container>
    </section>
  )
}

export default About
