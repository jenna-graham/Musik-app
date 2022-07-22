import { useEffect } from 'react';
import { useDataContext } from './ContextProvider';

export default function ConcertPage({ singleArtist }) {
  const { handleFetchConcerts, concerts } = useDataContext();
  useEffect(() => {
    handleFetchConcerts(singleArtist.name);
  }, [singleArtist]); // eslint-disable-line

  return (
    <div className="artist-live">
      <a href={concerts.url} target="blank">
        See {singleArtist.name} live!
      </a>
    </div>
  );
}
