import { useDataContext } from './ContextProvider';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
  const { favorites, handleDeleteFavorite } = useDataContext();

  return (
    <div className="fave-list">
      {favorites.map((favorite, i) => (
        <div className="fave-artist" key={favorite.name + i}>
          <Link>
            <h3>{favorite.name}</h3>
            <img src={favorite.images} />
          </Link>
          <button onClick={() => handleDeleteFavorite(favorite.id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
}
