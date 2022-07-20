import { useState, useContext, createContext } from 'react';
import { getAlbums, getArtist, getUser, searchArtists } from './services/fetch-utils';


const dataContext = createContext();

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [artists, setArtists] = useState([]);
  const [singleArtist, setSingleArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  
  console.log(artists);

  const stateAndSetters = { 
    user, 
    setUser, 
    artists, 
    setArtists,  
    handleArtistSearch,
    handleFetchArtist,
    singleArtist,
    handleFetchAlbums,
    albums
  }; 

  async function handleArtistSearch(name) {
    const artist = await searchArtists(name);
    setArtists(artist.items);
  }

  async function handleFetchArtist(id) {
    const artists = await getArtist(id);
    setSingleArtist(artists);
  }

  async function handleFetchAlbums(id) {
    const albums = await getAlbums(id);
    setAlbums(albums);
  }

  console.log(artists);

  
  return <dataContext.Provider value={stateAndSetters}>
    {children}
  </dataContext.Provider>;


}

export function useDataContext() {
  return useContext(dataContext);
}
