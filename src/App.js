import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Auth from './Auth';
import SearchPage from './SearchPage';
import { useDataContext } from './ContextProvider';

import './App.css';

import FavoritesPage from './FavoritesPage';

import ArtistDetails from './ArtistDetails';

import AboutPage from './AboutPage';

import HomePage from './HomePage';
import { logOut } from './services/fetch-utils';

import OutlinedButtons from './OutlinedButton';

export default function App() {
  const { user, setUser } = useDataContext();

  async function handleLogOut() {
    await logOut();

    setUser('');
  }

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <div className="links">
              <ul>
                {user && <li> Welcome {user.email}</li>}
                <li>
                  <Link to="/artists">Search Artists</Link>
                </li>
                <li>
                  <Link to="/favorites">View Your Favorites</Link>
                </li>
                <li>
                  <Link to="/AboutPage">Meet the Developers</Link>
                </li>
                {user && <OutlinedButtons onClick={handleLogOut}>Logout</OutlinedButtons>}
              </ul>
            </div>
          </nav>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/artists" /> : <HomePage />}
          </Route>
          <Route exact path="/auth">
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
          <Route exact path="/AboutPage">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
