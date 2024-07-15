import axios from 'axios';

// Base da url: https://api.themoviedb.org/3/
// Endpoint: /movie/now_playing?api_key=3338cebb38edddc83bb77150419a5455&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;