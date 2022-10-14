export function isAlreadyAFave(favorites, artist) {
    return favorites && favorites.find((favorite) => favorite.name === artist.name);
  }
  