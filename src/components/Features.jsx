import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'

import { FormattedHTMLMessage } from 'react-intl'

import iphone_01 from '../assets/features/iphone-01.png'
import iphone_02 from '../assets/features/iphone-02.png'
import iphone_03 from '../assets/features/iphone-03.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(4)
  },
  fullWidth: {
    width: '100%'
  }
})

function Features(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={8}
      >
        <Typography variant="h3" gutterBottom>
          <FormattedHTMLMessage id="features.title" />
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
      >
        <Grid item xs={12} sm={4}>
          <img
            src={iphone_01}
            className={classes.fullWidth}
            alt="iPhone Portrait"
          />
          <Grid container direction="row" justify="center" alignItems="center">
            <Icon fontSize="large">chat</Icon>
          </Grid>
          <Typography variant="h5" component="h3">
            <FormattedHTMLMessage id="features.card.title-01" />
          </Typography>
          <Typography component="p">
            <FormattedHTMLMessage id="features.card.description-01" />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img
            src={iphone_02}
            className={classes.fullWidth}
            alt="iPhone Portrait"
          />
          <Grid container direction="row" justify="center" alignItems="center">
            <Icon fontSize="large">call_split</Icon>
          </Grid>
          <Typography variant="h5" component="h3">
            <FormattedHTMLMessage id="features.card.title-02" />
          </Typography>
          <Typography component="p">
            <FormattedHTMLMessage id="features.card.description-02" />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img
            src={iphone_03}
            className={classes.fullWidth}
            alt="iPhone Portrait"
          />
          <Grid container direction="row" justify="center" alignItems="center">
            <Icon fontSize="large">face</Icon>
          </Grid>
          <Typography variant="h5" component="h3">
            <FormattedHTMLMessage id="features.card.title-03" />
          </Typography>
          <Typography component="p">
            <FormattedHTMLMessage id="features.card.description-03" />
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

Features.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Features)
