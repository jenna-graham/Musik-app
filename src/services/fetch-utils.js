import { client } from './client';

export function getUser() {
  return client.auth.user();
}

export async function signUpUser(email, password) {
  const { user } = await client.auth.signUp({ email, password });
  return user;
}

export async function signInUser(email, password) {
  const { user } = await client.auth.signIn({ email, password });
  return user;
}

export async function searchArtists(name) {
  const raw = await fetch(`/.netlify/functions/spotify?name=${name}`);
  const { artists } = await raw.json();
  // console.log(artists.items);

  return artists;
}

export async function getArtist(id) {
  const raw = await fetch(`/.netlify/functions/artist?id=${id}`);
  const data = await raw.json();
  return data;
}

export async function getAlbums(id) {
  const raw = await fetch(`/.netlify/functions/album?id=${id}`);
  const { albums } = await raw.json();


  return albums;
}