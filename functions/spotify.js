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

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
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


  const pleaseWork = `https://api.spotify.com/v1/search?type=artist&q=beyonce`;

  return fetch(`${pleaseWork}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then(json => {
      console.log(json);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(json)
      };
    });
    
};
