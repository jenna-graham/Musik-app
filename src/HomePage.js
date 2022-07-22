import React from 'react';
import { useHistory } from 'react-router-dom';

import MaterialButtons from './ContainedButton';

export default function HomePage() {
  const history = useHistory();
  const routeChange = () => {
    const path = '/Auth';
    history.push(path);
  };

  return (
    <div className="home-page">
      <h1 className="tagline">Discover | Experience | Connect</h1>
      <MaterialButtons className="home-button" onClick={routeChange}>
        Search Artists
      </MaterialButtons>
    </div>
  );
}
