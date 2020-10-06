import apiUrl from './apiConfig';
import axios from 'axios';

export const getData = async (titleID) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/data/${titleID}`,
  });
};

export const getEpisodes = async (titleID) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/episode-data/${titleID}`,
  });
};

export const getHighlyRatedEpisodes = async (limit) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/get-top-rated-shows?limit=${limit}`,
  });
};

export const getMetaData = async (titleID) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/meta-data/${titleID}`,
  });
};

export const getTitleMatches = async (titleID) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/get-title-matches/${titleID}`,
  });
};

export const apiEndpoints = {
  getData,
  getEpisodes,
  getHighlyRatedEpisodes,
  getMetaData,
  getTitleMatches,
};
