import React from 'react';

import Button from '@mui/material/Button';

export default function BasicButtons({ onClick }) {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      color="success"
      style={{
        width: '200px',
        height: '50px',
        marginLeft: '32px',
      }}
    >
      Register
    </Button>
  );
}

export function SignInButtons({ onClick }) {
  return (
    <Button
      onClick={onClick}
      color="success"
      variant="outlined"
      style={{
        width: '200px',
        height: '50px',
        marginLeft: '30px',
      }}
    >
      Login
    </Button>
  );
}
