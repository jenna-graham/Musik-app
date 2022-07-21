import { useState, useContext, createContext } from 'react';

import {
  getUser,
  searchArtists,
  getFavorites,
  addFavorite,
  deleteFavorite,
  getAlbums,
  getArtist,
  addUserName,
  getUserProfile,
  getUserProfileById
} from './services/fetch-utils';


const dataContext = createContext();

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [artists, setArtists] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [singleArtist, setSingleArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [profileName, setProfileName] = useState({});

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
    handleProfileName,
    userProfile,
    setUserProfile,
    userData,
    handleUserProfile,
    loading,
    profileName,
    handleGetUserProfileById
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

  async function handleProfileName(userName) {
    const userProfile = await addUserName(userName);
    setUserProfile(userProfile);
  }

  async function handleUserProfile(userName) {
    const userData = await getUserProfile(userName);
    setUserData(userData);
  }


  return <dataContext.Provider value={stateAndSetters}>{children}</dataContext.Provider>;
}

export function useDataContext() {
  return useContext(dataContext);
}
