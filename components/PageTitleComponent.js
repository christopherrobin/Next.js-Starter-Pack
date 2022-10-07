import { Box, Typography } from '@mui/material';

const PageTitleComponent = (props) => {
  const { icon, title } = props;
  const UseIcon = icon;
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: '1em'
    }}>
      { UseIcon &&
      <UseIcon
        color="secondary"
        sx={{
          height: '1.3em',
          width: '1.3em',
          mr: 1
        }}
      />
      }
      <Typography
        variant="h2"
        component="h1"
        color="secondary"
        sx={{
          pt: 0.5,
          textAlign: {
            xs: 'center',
            sm: 'left'
          }
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitleComponent;
