import { useState, useContext, createContext } from 'react';
import { getUser } from './services/fetch-utils';

const dataContext = createContext();

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(getUser());


  const stateAndSetters = { user, setUser }; 
 
  return <dataContext.Provider value={stateAndSetters}>
    {children}
  </dataContext.Provider>;


}

export function useDataContext() {
  return useContext(dataContext);
}
