import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtistList({ artists }) {
  console.log(artists);
  return (
    <div>
      {
        artists.map((artist, i) => (
          <div key={artist.id + i} className="artist">
            <Link to={`ArtistDetails/${artist.id}`}>
              <h3>{artist.name}</h3>
             
              <div>{artist.images.map((image, i) => 
                <div key={image.height + i}>{image.height === 320 && <img src={image.url}/>}</div>)}
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  );
}
