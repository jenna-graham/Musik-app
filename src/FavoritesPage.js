import { useEffect } from 'react';
import { useDataContext } from './ContextProvider';
import { Link } from 'react-router-dom';

import DeleteButtons from './DeleteButton';
import UserProfile from './UserProfile';

export default function FavoritesPage() {
  const { favorites, handleDeleteFavorite, handleGetFavorites, profileName, handleGetUserProfileById, user } = useDataContext();
  

  useEffect(() => {
    handleGetFavorites();
    handleGetUserProfileById(user.id);
  }, []); //eslint-disable-line

 

  return (
    <div className='test'>
      <header className='favorite-welcome'>
        <h1>{`Welcome to your Favorites Artists, ${profileName.user_name }!`}</h1>
      </header>
      <div className='favorite-page'>
        <div className="fave-list">
          {favorites.map((favorite, i) => (
            <div className="fave-artist" key={favorite.name + i}>
              <Link to={`/artist/${favorite.artist_id}`}>
                <h3>{favorite.name}</h3>
                <img src={favorite.images} />
              </Link>
              <DeleteButtons onClick={() => handleDeleteFavorite(favorite.id)}>
            Remove from Favorites
              </DeleteButtons>
            </div>
          ))}
        </div>
      </div>
      <div className='friend-list'> 
        <h3>Who are your friends listening to?</h3>
        <UserProfile />
      </div>

    </div>

  );
}
