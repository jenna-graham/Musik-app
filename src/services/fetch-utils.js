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

export async function addUserName(userName) {
  const data = await client.from('user_profile').insert({ user_name: userName });

  return data;
}

export async function getUserProfile() {
  const { body } = await client.from('user_profile').select('*');
  return body;
}

export async function getUserProfileById(id) {
  const { body } = await client.from('user_profile').select('*').match({ user_id: id }).single();
  return body;
  
}

export async function searchArtists(name) {
  const raw = await fetch(`/.netlify/functions/spotify?name=${name}`);
  const { artists } = await raw.json();

  return artists;
}

export async function getFavorites(id) {
  if (id) {
    const { body } = await client.from('favorite_artists').select('*').match({ user_id: id });
    return body;
  } else {
    const { body } = await client
      .from('favorite_artists')
      .select('*')
      .match({ user_id: getUser().id });
    return body;
  }
}

export async function addFavorite(favorite) {
  const { body } = await client.from('favorite_artists').insert(favorite);

  return body;
}
export async function deleteFavorite(id) {
  const { body } = await client.from('favorite_artists').delete().match({ id }).single();

  return body;
}

export async function getArtist(id) {
  const raw = await fetch(`/.netlify/functions/artist?id=${id}`);
  const data = await raw.json();
  return data;
}

export async function getAlbums(id) {
  const raw = await fetch(`/.netlify/functions/album?id=${id}`);
  const { items } = await raw.json();

  return items;
}

export async function logOut() {
  await client.auth.signOut();
}
