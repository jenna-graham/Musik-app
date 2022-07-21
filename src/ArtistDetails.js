import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from './ContextProvider';
import AlbumsList from './AlbumsList';


export default function ArtistDetails() {
  const { handleFetchArtist, singleArtist } = useDataContext();
  const { id } = useParams();

  useEffect(() => {
    handleFetchArtist(id);

}, [id]); //eslint-disable-line

  return (
    
    <div className="artist-details">
      <div className="single-artist">
        <div>{singleArtist.images && singleArtist.images[0] && <img src={singleArtist.images[0].url} />}</div>
        <div className="single-artist-info">
          <h1>{singleArtist.name}</h1>
          <h3>Genres:</h3>
          <ul>
            <li>{singleArtist.genres && singleArtist.genres[0]}</li>
            <li>{singleArtist.genres && singleArtist.genres[1]}</li>
            <li>{singleArtist.genres && singleArtist.genres[2]}</li>
          </ul>
        </div>
      </div>
      <div>
        
        <AlbumsList singleArtist={singleArtist}/>
          
      </div>
    </div>
  );
}
