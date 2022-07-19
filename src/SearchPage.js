import React from 'react';
import { useState } from 'react';
import { useDataContext } from './ContextProvider';


export default function SearchPage() {

  const { handleArtistSearch, artists } = useDataContext();
  const [name, setName] = useState('');
  console.log(artists.images);

  return (
    <div>
      <section>
        <input onChange={(e) => setName(e.target.value)} />
        <button onClick={() => handleArtistSearch(name)}>Search Artists</button>
      </section>


      {
        artists.map((artist, i) => ( 
          <div key={artist.id + i}>
            <div>
              {console.log(artist.images[0])}
              {artist.name}
            </div>
            <div>
              {artist.images[0].url}
            </div>
          </div>
        ))
      }
    </div>
  );
}
