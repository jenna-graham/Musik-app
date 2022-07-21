import { useDataContext } from './ContextProvider';
import { Link } from 'react-router-dom';
import DeleteButtons from './DeleteButton';

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
          <DeleteButtons onClick={() => handleDeleteFavorite(favorite.id)}>Remove from Favorites</DeleteButtons>
        </div>
      ))}
    </div>
  );
}
