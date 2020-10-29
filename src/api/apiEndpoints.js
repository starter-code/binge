import apiUrl from './apiConfig';
import axios from 'axios';

export const getData = async (titleID) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/get-data/${titleID}`,
  });
};

export const getEpisodes = async (titleID) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/get-episode-data/${titleID}`,
  });
};

export const getHighlyRatedShows = async (limit) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/get-top-rated-shows?limit=${limit}`,
  });
};

export const getRecentlySearchedShows = async (limit) => {
  return await axios({
    method: 'GET',
    // TODO replace this endpoint. currently a placeholder
    url: apiUrl + `/get-top-rated-shows?limit=${limit}`,
  });
};

export const getRandomShows = async (limit) => {
  return await axios({
    method: 'GET',
    // TODO replace this endpoint. currently a placeholder
    url: apiUrl + `/get-top-rated-shows?limit=${limit}`,
  });
};

export const getMetaData = async (titleID) => {
  return await axios({
    method: 'GET',
    url: apiUrl + `/get-meta-data/${titleID}`,
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
  getHighlyRatedShows,
  getMetaData,
  getRandomShows,
  getRecentlySearchedShows,
  getTitleMatches,
};
