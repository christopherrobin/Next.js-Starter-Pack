import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import ToggleThemeSwitch from '../components/ToggleThemeSwitch';

// Themes (currently light/dark only but easily extendable)
import lightTheme from '../lightTheme';
import darkTheme from '../darkTheme';

// Global CSS
import '../styles/globals.css';
import '../styles/Fade.css';

function MyApp({ Component, pageProps }) {
  // Initialize theme state and create handler function to toggle theme
  const [ theme, setTheme ] = React.useState(lightTheme);
  const toggleTheme = () => setTheme(theme === lightTheme ? darkTheme : lightTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <ToggleThemeSwitch
            theme={theme}
            toggleTheme={toggleTheme}
            darkTheme={darkTheme}
          />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
