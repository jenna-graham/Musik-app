import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteButtons({ onClick, variant = 'outlined', margin = '10px' }) {
  return (
    <Button
      className="delete-button"
      onClick={onClick}
      style={{
        backgroundColor: '#21b6af27',
        color: 'black',
        width: '250px',
        height: '50px',
      }}
      variant={variant}
      startIcon={<DeleteIcon />}
      color="success"
    >
      Remove
    </Button>
  );
}
