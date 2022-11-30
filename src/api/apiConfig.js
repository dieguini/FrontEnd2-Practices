import axios from "axios";

const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '1cc28d7cb8202fa7566afa90c4a8b9f4',
};

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json"
  },
  params: {
    api_key: apiConfig.apiKey
  }
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
  // Valida 'undefined' de response y data dentro de response
  if (response && response.data) {
    return response.data
  }

  return response;
}, (error) => {
  throw error;
});

export const movieType = {
  popular: 'popular',
  top_rated: 'top_rated',
  now_playing: 'now_playing'
}

export const getMovieList = (type, params) => {
  const url = 'movie/' + movieType[type]

  return axiosClient.get(url, params)
}