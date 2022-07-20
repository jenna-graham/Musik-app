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
    <div>
      <h1>{singleArtist.name}</h1>
      <div>{singleArtist.images && singleArtist.images[0] && <img src={singleArtist.images[0].url} />}</div>
      <h3>Genres:</h3>
      <ul>
        <li>{singleArtist.genres && singleArtist.genres[0]}</li>
        <li>{singleArtist.genres && singleArtist.genres[1]}</li>
        <li>{singleArtist.genres && singleArtist.genres[2]}</li>
       
      </ul>
      <AlbumsList singleArtist={singleArtist}/>

    </div>
  );
}
