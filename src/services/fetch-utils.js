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
  console.log(artists.items);

  return artists;
}