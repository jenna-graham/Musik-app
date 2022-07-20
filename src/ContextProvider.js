import { useState, useContext, createContext } from 'react';

import {
  getUser,
  searchArtists,
  getFavorites,
  addFavorite,
  deleteFavorite,
} from './services/fetch-utils';

import { getAlbums, getArtist, getUser, searchArtists } from './services/fetch-utils';



const dataContext = createContext();

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [artists, setArtists] = useState([]);
  const [favorites, setFavorites] = useState([]);
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
    albums,
    handleGetFavorites,
    favorites,
    handleAddFavorite,
    handleDeleteFavorite,
    
  }; 


  async function handleArtistSearch(name) {
    const artist = await searchArtists(name);
    setArtists(artist.items);
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
    const artists = await getArtist(id);
    setSingleArtist(artists);
  }

  async function handleFetchAlbums(id) {
    const albums = await getAlbums(id);
    setAlbums(albums);
  }

  console.log(artists);


  async function handleDeleteFavorite(id) {
    await deleteFavorite(id);
    const updatedFavorite = await getFavorites();
    setFavorites(updatedFavorite);
  }

  return <dataContext.Provider value={stateAndSetters}>{children}</dataContext.Provider>;
}

export function useDataContext() {
  return useContext(dataContext);
}
