import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import iphone_what from '../assets/highlights/iphone-what.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2, 0),
  },
  item: {
    alignSelf: 'center',
    maxWidth: 380,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  fullWidth: {
    width: '100%',
  },
}))

function HighlightWhat() {
  const classes = useStyles()
  return (
    <section id="highlight-what" className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} style={{ alignSelf: 'center' }}>
            <Typography variant="h5" component="h3" gutterBottom>
              <FormattedMessage id="highlights.what-title" />
            </Typography>
            <Typography variant="subtitle1" component="p">
              <FormattedMessage id="highlights.what-subtitle" />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
              <img
                src={iphone_what}
                className={classes.fullWidth}
                alt="iPhone Portrait"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default HighlightWhat
