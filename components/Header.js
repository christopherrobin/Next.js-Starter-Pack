import React from 'react';
import { Typography } from '@mui/material';
import theme from '../theme';

const Header = () => {
  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        color="secondary"
        sx={{
          color: 'white',
          fontWeight: 700,
          textAlign: 'center',
          // mt: 1,
          my: 5,
          fontSize: {
            // md: 45,
            // sm: 30,
            xs: 90
          }
        }}>
        Hello!
      </Typography>

    </>
  );
};

export default Header;
