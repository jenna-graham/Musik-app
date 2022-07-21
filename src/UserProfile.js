import React from 'react';
import { useDataContext } from './ContextProvider';
import { useState, useEffect } from 'react';
import Select from 'react-select';

export default function UserProfile() {
  const { userData, handleUserProfile } = useDataContext();
  const [user, setUser] = useState();

  
  
  useEffect(() =>{
    handleUserProfile();
  }, []); //eslint-disable-line

  return (
    <div>
      HELLO <Select onChange={(e) => console.log(e) } options={
        userData.map((user) => {
          return {
            label: user.user_name,
            value: user.user_id,
          };
        })
      }
      />
      
    </div>
  );
}
