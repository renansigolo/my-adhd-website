import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '350px',
    padding: theme.spacing(4, 0),
  },
  button: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}))

function Download() {
  const classes = useStyles()

  return (
    <section>
      <Container className={classes.root}>
        <Box mb={3}>
          <Typography variant="h3" component="h2" align="center">
            <FormattedMessage id="downloads.title" />
          </Typography>

          <Typography variant="subtitle1" component="p" align="center">
            <FormattedMessage id="downloads.description" />
          </Typography>
        </Box>

        <Grid container justify="center">
          <Button
            target="_blank"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<FontAwesomeIcon icon={faAppStore} />}
            href="https://apps.apple.com/au/app/my-adhd/id1375236150"
          >
            <FormattedMessage id="downloads.ios" />
          </Button>

          <Button
            target="_blank"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<FontAwesomeIcon icon={faGooglePlay} />}
            href="https://play.google.com/store/apps/details?id=tk.tdah"
          >
            <FormattedMessage id="downloads.android" />
          </Button>
        </Grid>
      </Container>
    </section>
  )
}

export default Download
