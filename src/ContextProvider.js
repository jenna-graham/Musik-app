import { useState, useContext, createContext } from 'react';
import { getUser, searchArtists } from './services/fetch-utils';


const dataContext = createContext();

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [artists, setArtists] = useState([]);


  const stateAndSetters = { 
    user, 
    setUser, 
    artists, 
    setArtists,  
    handleArtistSearch
  }; 

  async function handleArtistSearch(name) {
    const artists = await searchArtists(name);
    setArtists(artists);
  }



  
  return <dataContext.Provider value={stateAndSetters}>
    {children}
  </dataContext.Provider>;


}

export function useDataContext() {
  return useContext(dataContext);
}
