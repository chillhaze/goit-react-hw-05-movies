// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '22569115-02a432c6c1c62bbb3a59801b7';
// const PER_PAGE = 12;

// export const fetchItems = async (searchItem, page = 1) => {
//   const response = await axios.get(
//     `?q=${searchItem}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`,
//   );
//   return response;
// };

// Через обычный фетч, без axios

export const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '501ee89e0c17f106a2023a872eb6ff32';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('carrrramba! nothing found!'));
}

export const fetchTrandingItems = () => {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  );
};

export const fetchByMoovieId = movieId => {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
};

export const fetchMooviesBySearch = searchQuery => {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1`,
  );
};

export const fetchActors = movieId => {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
};

export const fetchReviews = movieId => {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
};
