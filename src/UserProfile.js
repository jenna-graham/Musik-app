import React from 'react';
import { useDataContext } from './ContextProvider';
import { useState, useEffect } from 'react';
import Select from 'react-select';


export default function UserProfile() {
  const { userData, handleUserProfile } = useDataContext();
  const [userId, setUserId] = useState('');

  
  
  useEffect(() =>{
    handleUserProfile();
  }, []); //eslint-disable-line

  return (
    <div>
      <Select 
        options={userData.user_name}/>
    </div>
  );
}

    // <select>
    //   {
    //     userData.map((user, i) => 
    //       <option onChange={(e) => setUserId()} key={user.user_id + i} value={user.user_id}>{user.user_name}</option>
    //     )
    //   }
    // </select>