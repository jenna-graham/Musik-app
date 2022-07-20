import React from 'react';
import { useDataContext } from './ContextProvider';
import { useState } from 'react';

export default function UserProfile() {
  const { userData, handleUserProfile } = useDataContext();
  const [userInput, setUserInput] = useState('');
  console.log(userData);

  return (
    <div>
      <input onChange={(e) => setUserInput(e.target.value)}/>
      <button onClick={() => handleUserProfile(userInput)}>Submit</button>
    </div>
  );
}
