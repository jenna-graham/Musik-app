import React from 'react';
import Button from '@mui/material/Button';

export default function SearchButton() {
  return (
    <div>
      <Button
        variant="outlined"
        color="success"
        style={{
          width: '200px',
          height: '40px',
        }}
      >
        Search
      </Button>
    </div>
  );
}
