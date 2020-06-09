import _ from 'lodash';
import React, { useState } from 'react';

import { getEpisodes } from '../../api/api';
import { Chart } from '../Chart/Chart';

const SeriesSearch = () => {
  const [chartInfo, setChartInfo] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const resetInputValue = () => {
    setSearchValue('');
  };

  /**
   * Generates y-axis season labels for given series
   * @param {Array} data
   * @returns {Array}
   */
  const generateSeasonLabels = (data) => {
    let seasonLabels = [];
    let seasonCount = 1;
    _.each(data, (episodeData) => {
      if (episodeData.episode === 1 && episodeData.season === seasonCount) {
        const label = {
          type: 'seasonLabels',
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

  /**
   * Generates x axis labels for episode counts
   * @param {Array} data
   * @returns {Array}
   */
  const generateEpisodeNumberLabels = (data) => {
    let episodeLabels = [];
    let maxEpisodeCount = 0;
    _.each(data, (episodeData) => {
      if (episodeData.episode > maxEpisodeCount) {
        const label = {
          type: 'episodeLabels',
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

  const searchFunction = async (event) => {
    event.preventDefault();
    setChartInfo([]);

    getEpisodes(searchValue).then(({ data: { results } }) => {
      const seasonLabels = generateSeasonLabels(results);
      const episodeLabels = generateEpisodeNumberLabels(results);
      const chartData = _.map(results, (data) => {
        const output = {
          type: 'episodeData',
          data,
        };
        return output;
      });
      setChartInfo([...chartData, ...seasonLabels, ...episodeLabels]);
    });

    resetInputValue();
  };

  return (
    <div className="">
      <form className="searchForm">
        <input
          value={searchValue}
          onChange={handleSearchInputChange}
          placeholder="Search Series Here"
          type="text"
        />
        <input onClick={searchFunction} value="search" type="submit" />
      </form>
      <Chart data={chartInfo} />
    </div>
  );
};

export default SeriesSearch;
