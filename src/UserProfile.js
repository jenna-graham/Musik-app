import React from 'react';
import { getFavorites } from './services/fetch-utils';
import { useDataContext } from './ContextProvider';
import { useState, useEffect } from 'react';
import Select from 'react-select';

export default function UserProfile() {
  const { userData, handleUserProfile } = useDataContext();
  const [favorites, setFavorites] = useState([]);


  async function handleGetFavorites(userId) {
    const favorites = await getFavorites(userId);
    setFavorites(favorites);
  }


  useEffect(() =>{
    handleUserProfile();
  }, []); //eslint-disable-line


  return (
    <div>
      <Select className="dropdown" 
        onChange={(e) => handleGetFavorites(e.value) } options={
          userData.map((user) => {
            return {
              label: user.user_name,
              value: user.user_id,
            };
          })
        }
      />
      <div className="fave-list">
        {favorites.map((favorite, i) => (
          <div className="fave-artist" key={favorite.name + i}>
            <h3>{favorite.name}</h3>
            <img src={favorite.images} />
          </div>
        ))}
      </div>
    </div>
  );
}
