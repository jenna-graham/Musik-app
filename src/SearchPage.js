import { useState, useEffect } from 'react';
import ArtistList from './ArtistList';
import { useDataContext } from './ContextProvider';
import { searchArtists } from './services/fetch-utils';

export default function SearchPage() {
  const { handleArtistSearch, artists, setArtists } = useDataContext();
  const [name, setName] = useState('');
  console.log(artists);

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
        <input onChange={(e) => setName(e.target.value)} />
        <button onClick={() => handleArtistSearch(name)}>Search Artists</button>
      </section>
      <div>
        <ArtistList artists={artists} />
      </div>
    </div>
  );
}
