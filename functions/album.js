const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

exports.handler = async (event, context) => {
  
  
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  const auth = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');


  const tokenEndPoint = `https://accounts.spotify.com/api/token`;

  const redirectTo = encodeURI(process.env.URL, +'/.netlify/functions/callback');
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // I just spent forever trying to figure out why we need the redirect_uri here. it's always bugged me! after all, we just make the request to callback.js exactly once, the first time you (the developer) get the token in the browser, then copies it into your .env. We never actually redirect the user! Why provide it to the URL here? It turns out, here's the answer:

    // "This parameter is used for validation only (there is no actual redirection). The value of this parameter must exactly match the value of redirect_uri supplied when requesting the authorization code." (https://developer.spotify.com/documentation/general/guides/authorization/code-flow/). What a relief to finally know this!

    body: `grant_type=refresh_token&refresh_token=${refreshToken}&redirect_uri=${redirectTo}`,
  };
  const accessToken = await fetch(tokenEndPoint, options)
  
    .then((res) => res.json())
    .then((json) => {
      return json.access_token;
    })
    .catch((error) => {
      console.error(error);
    });

  const pleaseWork = `https://api.spotify.com/v1/artists/${event.queryStringParameters.id}/albums`;

  return fetch(pleaseWork, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then(json => {
      console.log('ARTIST', json);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(json)
      };
    });
    
};
