import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from './ContextProvider';


export default function ArtistDetails() {
  const { handleFetchArtist, singleArtist } = useDataContext();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    handleFetchArtist(id);

}, [id]); //eslint-disable-line

  return (
    <div>
      <h1>{singleArtist.name}</h1>
    </div>
  );
}
