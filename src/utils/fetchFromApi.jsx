import axios, * as others from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '38580dc188msh062b6f9ea4142e5p17703fjsnf60c8e82c98f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const fetchFromApi = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)
  // console.log(data)
  return data
}