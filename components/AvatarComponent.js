import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

const AvatarComponent = ({url, size, containerStyles}) => {
  return (
    <Box sx={containerStyles || {}}>
      <Image
        className="circle-image"
        alt="Profile Picture"
        height={size || 100}
        width={size || 100}
        src={url}
      />
    </Box>
  );
};

export default AvatarComponent;
