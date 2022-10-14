import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from './ContextProvider';
import FavoritesButton from './FavoritesButton';
import { isAlreadyAFave } from './utils';

export default function ArtistList({ artists }) {
  const { handleAddFavorite, favorites, handleDeleteFavorite, handleGetFavorites } =
    useDataContext();

  useEffect(() => {
    if (!favorites.length) handleGetFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="artist-list">
      {artists.map((artist, i) => {
        const alreadyFave = isAlreadyAFave(favorites, artist);
        return (
          <div key={artist.id + i} className="artist">
            <Link to={`/artist/${artist.id}`}>
              <div className="artist-image">
                {
                  artist.images && artist.images[0] && artist.images.length 
                    ? <img src={artist.images[0].url} />
                    : <img src="MüsíkHomePage.jpg" />
                }
              </div>
            </Link>
            <div className="favorite-click">
              <h3>{artist.name}</h3>
              <FavoritesButton
                alreadyFave={alreadyFave}
                className="fave-button"
                onClick={() =>
                  alreadyFave
                    ? handleDeleteFavorite(alreadyFave.id)
                    : handleAddFavorite({
                        // eslint-disable-next-line indent
                        artist_id: artist.id,
                        // eslint-disable-next-line indent
                        name: artist.name,
                        // eslint-disable-next-line indent
                        images: artist.images && artist.images[0] && artist.images[0].url,
                        // eslint-disable-next-line indent
                      })
                }
              >
                {alreadyFave ? '❤️' : '♡'}
              </FavoritesButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
