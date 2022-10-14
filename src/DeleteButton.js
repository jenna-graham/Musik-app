import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

// I'd want to see all these button components living in the same, or at least live together in the same folder. that way you can eaily reuse their shared behavior (width: 250px, for example)
export default function DeleteButtons({ onClick, variant = 'outlined' }) {
  return (
    <Button
      className="delete-button"
      onClick={onClick}
      style={{
        backgroundColor: '#21b6af27',
        color: 'rgb(168, 164, 164)',
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
