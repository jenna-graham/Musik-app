import React from 'react';
import { useDataContext } from './ContextProvider';
import { useState, useEffect } from 'react';


export default function UserProfile() {
  const { userData, handleUserProfile } = useDataContext();

  
  
  useEffect(() =>{
    handleUserProfile();
  }, []); //eslint-disable-line

  return (
    <div>
      {
        userData.map((user, i) => <div key={user.user_id + i}>
          
        </div>)
      }
    </div>
  );
}
