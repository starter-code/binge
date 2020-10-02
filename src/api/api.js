import apiUrl from './apiConfig';
import axios from 'axios';

export const getEpisodes = async (searchTerm) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/episode-data/${searchTerm}`,
  });
};

export const getHighlyRatedEpisodes = async (limit) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/get-top-rated-shows?limit=${limit}`,
  });
};

export const getMetaData = async (searchTerm) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/meta-data/${searchTerm}`,
  });
};

export const getTitleMatches = async (searchTerm) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/get-title-matches/${searchTerm}`,
  });
};
