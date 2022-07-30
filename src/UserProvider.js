import { useState, useContext, createContext } from 'react';

import {
  getUser,
  addUserName,
  getUserProfile,
  getUserProfileById,
} from './services/fetch-utils';

const dataContext = createContext();

// i'm not going to import the useUserContext() into every necessary component, but here's what 
// splitting into multiple Providers might look like.
// Also in index.js, you'd wrap the App in this Provider, in addition to the other provider.
export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [userProfile, setUserProfile] = useState([]);
  const [userData, setUserData] = useState([]);
  const [profileName, setProfileName] = useState({});
  
  const stateAndSetters = {
    user,
    setUser,
    handleProfileName,
    userProfile,
    setUserProfile,
    userData,
    handleUserProfile,
    profileName,
    handleGetUserProfileById,
  }; 


  async function handleGetUserProfileById(id) {
    const profileName = await getUserProfileById(id);
    setProfileName(profileName);
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
