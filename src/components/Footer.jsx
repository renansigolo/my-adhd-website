import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography, Box } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl'

function Footer() {
  return (
    <Box display="flex" height="40px">
      <Grid container justify="center" alignItems="center">
        <Typography variant="caption" gutterBottom>
          <FormattedMessage
            id="footer.title"
            defaultMessage="Made with {heartIcon} by Renan Sigolo."
            values={{ heartIcon: <FontAwesomeIcon icon={faHeart} /> }}
          />
        </Typography>
      </Grid>
    </Box>
  )
}

export default Footer
