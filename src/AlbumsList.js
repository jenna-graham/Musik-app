import React from 'react';
import { useEffect } from 'react';
import ArtistDetails from './ArtistDetails';
import { useDataContext } from './ContextProvider';

export default function AlbumsList({ singleArtist }) {
  const { handleFetchAlbums, albums } = useDataContext();
  
  console.log(albums);
  
  useEffect(() => {
    handleFetchAlbums(singleArtist.id);
  }, [singleArtist.id]); // eslint-disable-line
  
  return (
    <div className="album-list">
      { albums && albums.length &&
        albums.map((album, i) => <div className="album" key={album.id + i}>
          <h3>{album.name}</h3>
          <div className='album-image'>{album.images && album.images[0] && album.images.length ? <img src={album.images[0].url} /> : <img src='/crab.jpg' />}</div>
        </div>)
      }
    </div>
  );
}
