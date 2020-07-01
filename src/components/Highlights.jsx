import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import iphone_01 from '../assets/features/iphone-01.png'
import iphone_02 from '../assets/features/iphone-02.png'
import iphone_03 from '../assets/features/iphone-03.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2, 0),
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

function Highlights() {
  const classes = useStyles()

  const cards = [
    {
      img: iphone_01,
      title: 'highlights.title',
      subtitle: 'highlights.subtitle',
    },
    {
      img: iphone_02,
      title: 'highlights.title',
      subtitle: 'highlights.subtitle',
    },
    {
      img: iphone_03,
      title: 'highlights.title',
      subtitle: 'highlights.subtitle',
    },
    {
      img: iphone_03,
      title: 'highlights.title',
      subtitle: 'highlights.subtitle',
    },
  ]

  const cardItems = cards.map((card, index) => (
    <Grid item className={classes.item} key={index}>
      <Grid container justify="center" alignItems="center">
        <img
          src={card.img}
          className={classes.fullWidth}
          alt="iPhone Portrait"
        />
      </Grid>

      <Typography variant="h5" component="h3" align="center">
        <FormattedMessage id="highlights.title" />
      </Typography>
      <Typography variant="subtitle1" component="p" align="center">
        <FormattedMessage id="highlights.subtitle" />
      </Typography>
    </Grid>
  ))

  return (
    <section className={classes.root}>
      <Container className={classes.grid}>
        <div className="grid-2">{cardItems}</div>
      </Container>
    </section>
  )
}

export default Highlights
