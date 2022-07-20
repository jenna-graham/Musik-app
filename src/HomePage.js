import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomePage() {
  const history = useHistory();
  const routeChange = () => {
    const path = '/Auth';
    history.push(path);
  };

  return (
    <div>
      <button onClick={routeChange}>Search Artists</button>
    </div>
  );
}
