import apiUrl from './apiConfig';
import axios from 'axios';

export const getEpisodes = async (searchTerm) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/episodes/${searchTerm}`,
  });
};
