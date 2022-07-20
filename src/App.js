import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Auth from './Auth';
import SearchPage from './SearchPage';
import { useDataContext } from './ContextProvider';

import './App.css';

import FavoritesPage from './FavoritesPage';

import ArtistDetails from './ArtistDetails';


export default function App() {
  const { user, setUser } = useDataContext();
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {user && <li> {user.email}</li>}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Auth">Sign In</Link>
            </li>
            <li>
              <Link to="/favorites">View Your Favorites</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/artists" /> : <Auth />}
          </Route>
          <Route exact path="/artists">
            {!user ? <Redirect to="/" /> : <SearchPage />}

          </Route>
          <Route exact path="/favorites">
            {!user ? <Redirect to="/" /> : <FavoritesPage />}
          </Route>

          <Route exact path="/artist/:id">
            {!user ? <Redirect to="/" /> : <ArtistDetails />}
          </Route>    
        


        </Switch>
      </div>
    </Router>
  );
}
