import { Tooltip, FormControlLabel, Switch } from '@mui/material';
import { NightsStay, WbSunny } from '@mui/icons-material';

const ToggleThemeSwitch = ({theme, toggleTheme, darkTheme}) => {
  return (
    <Tooltip title="Toggle light/dark theme">
      <FormControlLabel
        sx={{ my: 2 }}
        control={
          <Switch
            checked={theme === darkTheme}
            onChange={toggleTheme}
            name="toggleDarkMode"
            color="primary"
          />
        }
        label={theme === darkTheme ? <NightsStay /> : <WbSunny /> }
      />
    </Tooltip>
  );
};

export default ToggleThemeSwitch;
