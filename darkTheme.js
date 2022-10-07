import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: { mode: 'dark' },
  typography: {
    h1: {
      fontWeight: 900,
      fontSize: '2em',
      marginBottom: '.2em'
    },
    h2: {
      fontWeight: 900,
      fontSize: '2em',
      color: '#0984e3'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontWeight: 900,
          height: 50
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        // variant: 'outlined',
        elevation: 1,
        square: true,
        sx: {
          p: 3,
          mb: 2
        }
      }
    },
    MuiCard: {
      defaultProps: {
        // elevation: 0,
        // variant: 'outlined',
        sx: {
          p: 0
        }
      }
    }
  }
});

export default darkTheme;
