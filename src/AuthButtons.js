import React from 'react';

import Button from '@mui/material/Button';

export default function BasicButtons({
  onClick,
 
}) {
  return (
    
    <Button 
      onClick={onClick} 
      variant="outlined" 
      color='success'>Register
      
    
    </Button>

  );
}

export function SignInButtons({
  onClick,
}) {
  return (
      
    <Button onClick={onClick} variant="outlined" color='success'>Login</Button>
       
  );
}