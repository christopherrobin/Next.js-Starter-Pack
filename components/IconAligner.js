import { Box } from '@mui/material';

const IconAligner = (props) => {
  const { icon, title, maxWidth } = props;
  const UseIcon = icon;
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: '1em',
      maxWidth: maxWidth,
      margin: 'auto'
    }}>
      <UseIcon color="primary" sx={{ height: '1em', width: '1em', fontSize: 20}} />
      <Box sx={{flexGrow: 1, mb: 0, textAlign: 'left'}}>{title}</Box>
    </div>
  );
};

export default IconAligner;
