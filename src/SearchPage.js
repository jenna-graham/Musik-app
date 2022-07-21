import { useState, useEffect } from 'react';
import ArtistList from './ArtistList';
import { useDataContext } from './ContextProvider';
import { searchArtists } from './services/fetch-utils';

import MaterialButtons from './ContainedButton';

export default function SearchPage() {
  const { handleArtistSearch, artists, setArtists } = useDataContext();
  const [name, setName] = useState('');

  useEffect(() => {
    async function fetchArtists() {
      const newArtists = await searchArtists('A');
      setArtists(newArtists.items);
    }
    fetchArtists();
  }, []); //eslint-disable-line

  return (
    <div className="search">
      <section>
        <input
          className="search-input"
          placeholder="search artists"
          onChange={(e) => setName(e.target.value)}
        />
        <MaterialButtons onClick={() => handleArtistSearch(name)}>Search Artists</MaterialButtons>
      </section>
      <div>
        <ArtistList artists={artists} />
      </div>
    </div>
  );
}
