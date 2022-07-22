import { useState, useEffect } from 'react';
import ArtistList from './ArtistList';
import { useDataContext } from './ContextProvider';
import { searchArtists } from './services/fetch-utils';
import SearchButton from './SearchButton';

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
    <div>
      <section className="search">
        <input
          className="search-input"
          placeholder="Search Artists"
          onChange={(e) => setName(e.target.value)}
        />
        <SearchButton onClick={() => handleArtistSearch(name)}>Search Artists</SearchButton>
      </section>
      <div>
        <ArtistList artists={artists} />
      </div>
    </div>
  );
}
