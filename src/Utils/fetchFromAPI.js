import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {    
    url: BASE_URL,
    params: { maxResults: 50},
    
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) => {    //async function, that function just take one parameter(url), await axios.get(). in a get function we are going to pass url, so whatever request we make we start from base_url, now we want to add something to that url, and thats going to be a url string, the one we are geing as a params ##important, meaning /base_Url/getChannel or /base_Url/Videos. we going to get those from the endpoints of the api.
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);     //options object is the second or the last params into axios .get function. then have to get response, now right before await.get(), make it a variable to store the response,we can immidiatly detructure it {data}, and then return the data,

    return data;
} 