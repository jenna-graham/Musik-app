import React from 'react';
import { useEffect } from 'react';
import { useDataContext } from './ContextProvider';
import { SyncLoader } from 'react-spinners';

export default function AlbumsList({ singleArtist }) {
  const { handleFetchAlbums, albums, loading } = useDataContext();
  
  
  useEffect(() => {
    handleFetchAlbums(singleArtist.id);
  }, [singleArtist.id]); // eslint-disable-line
  
  return (
    <div className="loading">
      {loading ? (
        <SyncLoader color="white" loading={loading}/>
      ) : (
    
        <div className="album-list">
          { albums && albums.length &&
        albums.map((album, i) => <div className="album" key={album.id + i}>
          <h3>{album.name}</h3>
          <div className='album-image'>{album.images && album.images[0] && <img src={album.images[0].url} />}</div>
        </div>)
          }
        </div>
      )}
    </div>
  );
  
}
