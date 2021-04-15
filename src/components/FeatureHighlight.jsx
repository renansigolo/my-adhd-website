import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { FormattedMessage } from 'react-intl'

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
    display: 'flex',
    justifyContent: 'center',
  },
  fullWidth: {
    width: 'auto',
    maxHeight: '572px',
  },
}))

function FeatureHighlight(props) {
  const classes = useStyles()
  return (
    <section id={props.payload.id} className={classes.root}>
      <Container>
        <Grid container direction={props.payload.direction} spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
              <img
                src={props.payload.imgSrc}
                className={classes.fullWidth}
                alt="iPhone Portrait"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ alignSelf: 'center' }}>
            <Typography variant="h4" component="h3" gutterBottom>
              <FormattedMessage
                id={'highlight.' + props.payload.id + '-title'}
              />
            </Typography>
            <Typography variant="subtitle1" component="p">
              <FormattedMessage
                id={'highlight.' + props.payload.id + '-subtitle'}
              />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default FeatureHighlight
