import { CHART_SQUARE_TYPES } from 'src/constants';

import { _ } from './_';

const {
  EPISODE_DATA,
  EPISODE_NUMBER_LABELS,
  SEASON_LABELS,
  YEAR_LABELS,
} = CHART_SQUARE_TYPES;

/**
 * Generates y-axis season labels for given series
 * @param {Array} data
 * @returns {Array}
 */
export const generateSeasonLabels = (inputData) => {
  let seasonLabels = [];
  let seasonCount = 1;
  _.each(inputData, (episodeData) => {
    if (episodeData.episode === 1 && episodeData.season === seasonCount) {
      const label = {
        type: SEASON_LABELS,
        data: {
          season: seasonCount,
          episode: 0,
        },
      };
      seasonLabels.push(label);
      seasonCount++;
    }
  });
  return seasonLabels;
};

export const generateYearLabels = (inputData) => {
  const data = _.cloneDeep(inputData);
  const yearsReleased = {};
  let yearLabels = [];
  let yearCounter = 0;
  let episodeCounter = 1;

  _.each(data, (episodeData) => {
    let { year } = episodeData;
    if (!yearsReleased[year]) {
      const label = {
        type: YEAR_LABELS,
        data: {
          year,
          episode: 0,
          season: yearCounter + 1,
        },
      };
      yearsReleased[year] = true;
      yearLabels.push(label);

      year++;
      yearCounter++;
      episodeCounter = 1;
    } else {
      episodeCounter++;
    }
    episodeData.season = yearCounter;
    episodeData.episode = episodeCounter;
  });
  return { yearLabels, data };
};

/**
 * Generates x axis labels for episode counts
 * @param {Array} data
 * @returns {Array}
 */
export const generateEpisodeNumberLabels = (inputData) => {
  let episodeLabels = [];
  let maxEpisodeCount = 0;
  _.each(inputData, (episodeData) => {
    if (episodeData.episode > maxEpisodeCount) {
      const label = {
        type: EPISODE_NUMBER_LABELS,
        data: {
          episode: episodeData.episode,
          season: 999, // placeholder number so episode label numbers are always on the bottom
        },
      };
      episodeLabels.push(label);
      maxEpisodeCount++;
    }
  });
  return episodeLabels;
};

export const generateSeasonsChart = (chartInfo) => {
  const seasonLabels = generateSeasonLabels(chartInfo);
  const episodeLabels = generateEpisodeNumberLabels(chartInfo);
  const chartData = _.map(chartInfo, (data) => {
    const output = {
      type: EPISODE_DATA,
      data,
    };
    return output;
  });

  return [...chartData, ...seasonLabels, ...episodeLabels];
};

export const generateYearsChart = (chartInfo) => {
  const { yearLabels, data } = generateYearLabels(chartInfo);
  const episodeLabels = generateEpisodeNumberLabels(data);
  const chartData = _.map(data, (data) => {
    const output = {
      type: EPISODE_DATA,
      data,
    };
    return output;
  });

  return [...chartData, ...yearLabels, ...episodeLabels];
};

export const getColor = (episodeRating, gradient) => {
  let rating = episodeRating * 10;
  let color = gradient[rating];

  // Duct-tape fix
  // Fixes max rating returning color #FFF
  if (rating === 100) {
    color = '#001100';
  } else if (_.isNaN(rating)) {
    color = '#888';
  }

  return color;
};
