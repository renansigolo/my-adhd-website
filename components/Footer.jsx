import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import Link from 'next/link'

const useStyles = makeStyles(() => ({
  root: {
    background: 'linear-gradient(#fafafa, #fff)',
  },
}))

function Footer() {
  const classes = useStyles()

  return (
    <footer id="footer" className={classes.root}>
      <Container>
        <Box display="flex" height="60px">
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Typography variant="caption" align="center">
              <FormattedMessage
                id="footer.title"
                defaultMessage="Made with {heartIcon} by Renan Sigolo."
                values={{ heartIcon: <FontAwesomeIcon icon={faHeart} /> }}
              />
              <br />
              <Link href="/privacy-policy">
                <a>
                  <FormattedMessage
                    id="footer.privacy-policy"
                    defaultMessage="Privacy Policy"
                  />
                </a>
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer
