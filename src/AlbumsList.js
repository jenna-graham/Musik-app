import React from 'react';
import { useEffect } from 'react';
import { useDataContext } from './ContextProvider';

export default function AlbumsList() {
  const { handleFetchAlbums, albums } = useDataContext();

  useEffect(() => {
    handleFetchAlbums();
  }, []); //eslint-disable-line
  
  return (
    <div>AlbumsList</div>
  );
}
