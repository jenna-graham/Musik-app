import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtistList({ artists }) {
  console.log(artists);
  return (
    <div className="artist-list">
      {
        artists.map((artist, i) => (
          <div key={artist.id + i} className="artist">
            <Link to={`ArtistDetails/${artist.id}`}>
              <h3>{artist.name}</h3>
              {/* <img src={artist.images[0].url} /> */}
              <div>{artist.images.map((image, i) => 
                <div key={image.height + i}>
                    
                  {console.log(image)}

                  {image.height > 600 && image.height < 700 && <img src={image.url}/>}</div>)}
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  );
}
