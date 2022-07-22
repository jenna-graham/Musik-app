import React from 'react';

import Button from '@mui/material/Button';

export default function MaterialButtons({ onClick }) {
  return (
    <Button
      variant="outlined"
      style={{
        backgroundColor: '#21b6afae',
        color: 'black',
        width: '200px',
        height: '50px',
        marginBottom: '200px',
        // marginRight: '700px',
      }}
      onClick={onClick}
    >
      Enter Site
    </Button>
  );
}
