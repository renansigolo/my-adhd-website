import { Grid, Icon, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import iphone_01 from '../assets/features/iphone-01.png'
import iphone_02 from '../assets/features/iphone-02.png'
import iphone_03 from '../assets/features/iphone-03.png'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(4),
  },
  fullWidth: {
    width: '100%',
  },
})

function Features(props) {
  const { classes } = props
  const cards = [
    {
      img: iphone_01,
      icon: 'chat',
      title: 'features.card.title-01',
      subtitle: 'features.card.description-01',
    },
    {
      img: iphone_02,
      icon: 'call_split',
      title: 'features.card.title-02',
      subtitle: 'features.card.description-02',
    },
    {
      img: iphone_03,
      icon: 'face',
      title: 'features.card.title-03',
      subtitle: 'features.card.description-03',
    },
  ]

  const cardItems = cards.map((card, index) => (
    <Grid item xs={12} sm={4} key={index}>
      <img src={card.img} className={classes.fullWidth} alt="iPhone Portrait" />
      <Grid container direction="row" justify="center" alignItems="center">
        <Icon fontSize="large">{card.icon}</Icon>
      </Grid>
      <Typography variant="h5" component="h3">
        <FormattedMessage id={card.title} />
      </Typography>
      <Typography component="p">
        <FormattedMessage id={card.subtitle} />
      </Typography>
    </Grid>
  ))

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
          <FormattedMessage id="features.title" />
        </Typography>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
      >
        {cardItems}
      </Grid>
    </div>
  )
}

Features.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Features)
