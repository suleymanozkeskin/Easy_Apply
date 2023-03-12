import axios from 'axios';
import { rapidApiKey, rapidApiHost } from './config';

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {query: 'Python developer in Texas, USA', num_pages: '1'},
  headers: {
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': rapidApiHost,
  },
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

