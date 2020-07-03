// A custom theme for this app
import pink from '@material-ui/core/colors/pink'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[500],
    },
  },
})

export default theme
