/*
Very nice work on this! So far as your react app is concerned, the only big change I'd like to see is how you manage your Buttons. It's a little uncomfortable to have them living in separate files, with so much copy/pasted between them--I'd rather you find a way for them to share space and data to make DRY-er code. Otherwise, this codebase shows a lot of sophisticated problem solving, and it's especially impressive that you were able to integrate a second API into the project so quickly. I primarily judge project code quality based on how I'd feel if I were asked to maintain this codebase in the future, and I can happily say this would be a delight to add features to and maintain.
*/

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Auth from './Auth';
import SearchPage from './SearchPage';
import { useDataContext } from './ContextProvider';
import FavoritesPage from './FavoritesPage';
import ArtistDetails from './ArtistDetails';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import OutlinedButtons from './OutlinedButton';
import { logOut } from './services/fetch-utils';
import './App.css';

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
                {/* {user && <li> {`Welcome ${userData.user_name}`}</li>} */}
                <li>
                  <Link to="/artists">Search Artists</Link>
                </li>
                <li>
                  <Link to="/favorites">View Your Favorites</Link>
                </li>
                <li>
                  <Link to="/AboutPage">The Jams</Link>
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
