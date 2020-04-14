import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#268bd2',
    },
    secondary: {
      main: '#F26521',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f6f6ef',
    },
  },
});

export default theme;
