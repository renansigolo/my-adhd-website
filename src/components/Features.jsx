import {
  faChalkboardTeacher,
  faGrinStars,
  faStethoscope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2, 0),
    display: 'flex',
    justifyContent: 'center',
  },
  item: {
    alignSelf: 'center',
    maxWidth: 380,
  },
  fullWidth: {
    width: '100%',
  },
})

function Features(props) {
  const { classes } = props
  const cards = [
    {
      icon: faStethoscope,
      title: 'features.card.title',
      subtitle: 'features.card.description',
    },
    {
      icon: faChalkboardTeacher,
      title: 'features.card.title',
      subtitle: 'features.card.description',
    },
    {
      icon: faGrinStars,
      title: 'features.card.title',
      subtitle: 'features.card.description',
    },
  ]

  const cardItems = cards.map((card, index) => (
    <Grid item className={classes.item} key={index}>
      <Grid container justify="center" alignItems="center">
        <FontAwesomeIcon icon={card.icon} size="4x" />
      </Grid>
      <Typography variant="h5" component="h3" align="center">
        <FormattedMessage id={card.title + (index + 1)} />
      </Typography>
      <Typography component="p" align="center">
        <FormattedMessage id={card.subtitle + (index + 1)} />
      </Typography>
    </Grid>
  ))

  return (
    <Container>
      <div className={classes.root}>
        <div className="grid-3">{cardItems}</div>
      </div>
    </Container>
  )
}

export default withStyles(styles)(Features)
