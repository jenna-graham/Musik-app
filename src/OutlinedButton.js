import React from 'react';

import Button from '@mui/material/Button';

import { ThemeProvider } from '@material-ui/core';

import { createTheme } from '@material-ui/core/styles';


export default function OutlinedButtons({
  onClick,
}) {
  const theme = createTheme({

    palette: {
      primary: {
        main: '#00700',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={onClick}
        style={{
          marginTop: '10px',
        }}
        variant="outlined"
        color="success"
      >
        Logout
      </Button>
    </ThemeProvider>
  );
}
