import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from './ContextProvider';
import AlbumsList from './AlbumsList';
import ConcertPage from './ConcertPage';
import FavoritesButton from './FavoritesButton';
import { isAlreadyAFave } from './utils';

export default function ArtistDetails() {
  const {
    handleFetchArtist,
    singleArtist,
    favorites,
    handleDeleteFavorite,
    handleAddFavorite,
  } =
    useDataContext();
  const { id } = useParams();

  useEffect(() => {
    handleFetchArtist(id);
  }, [id]); //eslint-disable-line

  const alreadyFave = isAlreadyAFave(favorites, singleArtist);

  return (
    <div className="artist-details">
      <div className="single-artist">
        <div>
          {singleArtist.images && singleArtist.images[0] && (
            <img src={singleArtist.images[0].url} />
          )}
        </div>
        <div className="single-artist-info">
          <h1>{singleArtist.name}</h1>
          <ConcertPage singleArtist={singleArtist} />
          <h3>Genres:</h3>
          <ul>
            {singleArtist.genres.map((genre, i)=> <li key={genre + i}>{genre}</li>)}
          </ul>
          <FavoritesButton
            alreadyFave={alreadyFave}
            className="fave-button"
            onClick={() =>
              alreadyFave
                ? handleDeleteFavorite(alreadyFave.id)
                : handleAddFavorite({
                    // eslint-disable-next-line indent
                    artist_id: singleArtist.id,
                    // eslint-disable-next-line indent
                    name: singleArtist.name,
                    // eslint-disable-next-line indent
                    images:
                      singleArtist.images && singleArtist.images[0] && singleArtist.images[0].url,
                    // eslint-disable-next-line indent
                  })
            }
          >
            {alreadyFave ? '❤️' : '♡'}
          </FavoritesButton>
        </div>
      </div>
      <div>
        <AlbumsList singleArtist={singleArtist} />
      </div>
    </div>
  );
}
