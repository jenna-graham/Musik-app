import { useState, useContext, createContext } from 'react';

import {
  searchArtists,
  getFavorites,
  addFavorite,
  deleteFavorite,
  getAlbums,
  getArtist,
  getUserProfileById,
  getConcerts,
} from './services/fetch-utils';

// by convention, a Context's variable should be capitalized.
const DataContext = createContext();

// might be nice to split this into separate files. Not a huge save in space, but 
// as the project gets bigger, a single mega-Provider gets increasingly difficult to maintain
export default function ContextProvider({ children }) {
  const [artists, setArtists] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [singleArtist, setSingleArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [concerts, setConcert] = useState([]);

  const [profileName, setProfileName] = useState({});

  
  const stateAndSetters = {
    artists,
    setArtists,
    handleArtistSearch,
    handleFetchArtist,
    singleArtist,
    handleFetchAlbums,
    albums,
    handleGetFavorites,
    favorites,
    handleAddFavorite,
    handleDeleteFavorite,
    loading,
    profileName,
    handleGetUserProfileById,
    concerts,
    handleFetchConcerts,
  }; 

  async function handleGetUserProfileById(id) {
    const profileName = await getUserProfileById(id);
    setProfileName(profileName);
  }
  

  async function handleArtistSearch(name) {
    setLoading(true);
    const artist = await searchArtists(name);
    setArtists(artist.items);
    setLoading(false);
  }

  async function handleGetFavorites(id) {
    const favorites = await getFavorites(id);
    setFavorites(favorites);
  }

  async function handleAddFavorite(favorite) {
    await addFavorite(favorite);
    const updatedFavorite = await getFavorites();
    setFavorites(updatedFavorite);
  }

  async function handleFetchArtist(id) {
    setLoading(true);
    const artists = await getArtist(id);
    setLoading(false);
    setSingleArtist(artists);
  }

  async function handleFetchAlbums(id) {
    setLoading(true);
    const albums = await getAlbums(id);
    setLoading(false);
    setAlbums(albums);
  }

  async function handleDeleteFavorite(id) {
    await deleteFavorite(id);
    const updatedFavorite = await getFavorites();
    setFavorites(updatedFavorite);
  }

  async function handleFetchConcerts(keyword) {
    const concertInfo = await getConcerts(keyword);
    setConcert(concertInfo);
  }

  return <DataContext.Provider value={stateAndSetters}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}
