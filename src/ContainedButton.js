import React from 'react';

import Button from '@mui/material/Button';

export default function MaterialButtons({
  onClick,
}) {
  return (
    <Button onClick={onClick} variant="contained" color='secondary'>Search Artist</Button>
  );
}