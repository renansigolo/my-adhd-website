import {
  faChalkboardTeacher,
  faGrinStars,
  faStethoscope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { FormattedMessage } from 'react-intl'
// import styles from '../styles/Features.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4, 0),
    color: '#fff',
    background: 'linear-gradient(45deg, #7F3BF6 30%, #FF4B88 90%)',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '250px',
  },
  item: {
    alignSelf: 'center',
    maxWidth: 380,
  },
  fullWidth: {
    width: '100%',
  },
}))

function Features() {
  const classes = useStyles()

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
    <section id="features" className={classes.root}>
      <Container className={classes.grid}>
        <div className="grid__3">{cardItems}</div>
      </Container>
    </section>
  )
}

export default Features