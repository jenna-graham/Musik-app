import React from 'react';
import { useEffect } from 'react';
import { useDataContext } from './ContextProvider';

export default function AlbumsList({ singleArtist }) {
  const { handleFetchAlbums, albums } = useDataContext();
  
  
  useEffect(() => {
    handleFetchAlbums(singleArtist.id);
  }, [singleArtist.id]);
  
  return (
    <div>
      <div>HELLO FROM ALBUM LIST</div>
      {/* {
        albums.map((album, i) => <div key={album.id + i}>
          <h3>{album.name}</h3>
        </div>)
      } */}
    </div>
  );
}
