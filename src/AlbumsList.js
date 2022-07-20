import React from 'react';
import { useEffect } from 'react';
import { useDataContext } from './ContextProvider';

export default function AlbumsList({ singleArtist }) {
  const { handleFetchAlbums, albums } = useDataContext();
  
  
  useEffect(() => {
    handleFetchAlbums(singleArtist.id);
  }, [singleArtist.id]);
  
  return (
    <div className="album-list">
      { albums && albums.length &&
        albums.map((album, i) => <div className="album" key={album.id + i}>
          <h3>{album.name}</h3>
          <div className='album-image'>{album.images && album.images[0] && <img src={album.images[0].url} />}</div>
        </div>)
      }
    </div>
  );
}
