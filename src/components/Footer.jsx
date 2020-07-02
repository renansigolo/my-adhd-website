import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography, Box, Container } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl'

function Footer() {
  return (
    <footer id="footer">
      <Container>
        <Box display="flex" height="120px">
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Typography variant="caption" align="center" gutterBottom>
              <FormattedMessage
                id="footer.disclaimer"
                defaultMessage="This app is for educational purposes only and does not reflect a medical opinion.ADHD can only be diagnosed by a medical professional!"
                values={{ br: <br /> }}
              />
            </Typography>
            <Typography variant="caption" align="center">
              <FormattedMessage
                id="footer.title"
                defaultMessage="Made with {heartIcon} by Renan Sigolo."
                values={{ heartIcon: <FontAwesomeIcon icon={faHeart} /> }}
              />
            </Typography>
          </Grid>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer
