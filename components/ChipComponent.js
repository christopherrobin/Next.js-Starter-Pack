import React from 'react';
import { Chip } from '@mui/material';

const ChipComponent = ({color, text}) => <Chip sx={{ backgroundColor: color, fontWeight: 900 }} label={text} />;

export default ChipComponent;
