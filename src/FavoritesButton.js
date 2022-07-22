import React from 'react';
import Button from '@mui/material/Button';

export default function FavoritesButton({ onClick, alreadyFave }) {
  return (
    <div>
      <Button onClick={onClick} variant="text">
        {alreadyFave ? '❤️' : '♡'}
      </Button>
    </div>
  );
}
