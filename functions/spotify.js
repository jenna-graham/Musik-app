const fetch = require('node-fetch');
const dotenv = require('dotenv').config();

exports.handler = async (event, context) => {
  
  
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  const auth = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');

  const tokenEndPoint = `https://accounts.spotify.com/api/token`;

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www.-form-urlencoded'
    },
    body: `grant_type=refresh_token&refresh_token=${refreshToken}&redirect_uri=${encodeURI(process.env.URL,
      +'/.netlify/functions/callback')}`,
  };
  const accessToken = await fetch(tokenEndPoint, options)
    .then((res) => res.json())
    .then((json) => {
      return json.access_token;
    })
    .catch((error) => {
      console.error(error);
    });

  const pleaseWork = `https://api.spotify.com/v1/search?type=artist&include_external=audio&q=beyonce`;

  return fetch(`${pleaseWork}`, {
    method: 'Get',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then(json => {
      console.log(json);
    })
    .then(json => {
      return {
        statusCode: 200,
        body: JSON.stringify(json)
      };
    });
};
