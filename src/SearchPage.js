import React from 'react';
import { useState } from 'react';
import { useDataContext } from './ContextProvider';


export default function SearchPage() {

  const { handleArtistSearch, artists } = useDataContext();
  const [name, setName] = useState('');


  return (
    <div>
      <section>
        <input onChange={(e) => setName(e.target.value)} />
        <button onClick={() => handleArtistSearch(name)}>Search Artists</button>
      </section>
    </div>
  );
}
