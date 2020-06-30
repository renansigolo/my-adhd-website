import { Container, Typography, Box } from '@material-ui/core'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import logo from '../logo.svg'

export default class Header extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={logo} className="hero-logo" alt="logo" />
        </Box>
        <Typography variant="h2" component="h1" color="inherit" gutterBottom>
          <FormattedMessage
            id="header.title"
            defaultMessage="The first ADHD app with cognitive analysis!"
          />
        </Typography>
      </Container>
    )
  }
}
