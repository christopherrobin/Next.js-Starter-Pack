import * as React from 'react';
import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';

export default function TopRibbon() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar elevation={0} position="static" sx={{py: 1, mb: 1}}>
      <Toolbar variant="string">
        <Grid container sx={{maxWidth: 1200, m: 'auto'}}>
          <Grid item xs={11}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => router.push('/')}
              color="inherit"
              sx={{ ml: 0, p: 0, pt: 1, fontWeight: 900}}
            >
              gc<SportsFootballIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1} sx={{ textAlign: 'right'}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{m:0, p:0}}
            >
              <MenuItem onClick={() => router.push('/addleague')}>Add League</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>

  );
}
