/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { isEmpty } from 'lodash';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate(mt) {
  return (
    <Box sx={{ display: 'flex', mt: isEmpty(mt) ? '15vh' : mt.mt}}>
      <CircularProgress sx={{ m: 'auto', width: 90 }} size={90}/>
    </Box>
  );
}
