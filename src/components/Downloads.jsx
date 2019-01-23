import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { FormattedHTMLMessage } from 'react-intl'

import appleStoreBagde from '../assets/badges/app-store-badge-en.svg'
import playStoreBagde from '../assets/badges/play-store.svg'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 4
  },
  badge: {
    width: '300px',
    height: '100px',
    margin: '40px'
  }
})

function Downloads(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        <FormattedHTMLMessage id="downloads.title" />
      </Typography>

      <Typography component="p">
        <FormattedHTMLMessage id="downloads.description" />
      </Typography>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={16}
      >
        <a href="https://itunes.apple.com/us/app/tdah/id1375236150?ls=1&mt=8">
          <img
            src={appleStoreBagde}
            className={classes.badge}
            alt="iPhone Portrait"
          />
        </a>

        <a href="https://play.google.com/store/apps/details?id=tk.tdah">
          <img
            src={playStoreBagde}
            className={classes.badge}
            alt="iPhone Portrait"
          />
        </a>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Downloads)
