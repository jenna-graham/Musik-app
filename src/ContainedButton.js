import React from 'react';

import Button from '@mui/material/Button';

export default function MaterialButtons({ onClick }) {
  return (
    <Button
      variant="outlined"
      style={{
        backgroundColor: '#21b6afae',
        color: 'black',
        width: '250px',
        height: '50px',
        marginBottom: '230px',
        marginRight: '150px',
      }}
      onClick={onClick}
    >
      Enter Site
    </Button>
  );
}
