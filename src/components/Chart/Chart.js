import { _ } from '../../utils';
import React, { useState } from 'react';

import { ChartSquare } from './ChartSquare';

export const Chart = ({ data: chartInfo }) => {
  const [chartType, setChartType] = useState('season/episode');

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

  const generateYearLabels = (inputData) => {
    const data = _.cloneDeep(inputData);
    const yearsReleased = {};
    let yearLabels = [];
    let yearCounter = 0;
    let episodeCounter = 1;

    _.each(data, (episodeData) => {
      let { year } = episodeData;
      if (!yearsReleased[year]) {
        const label = {
          type: 'yearLabels',
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

  const seasonLabels = generateSeasonLabels(chartInfo);
  const episodeLabels = generateEpisodeNumberLabels(chartInfo);
  const { yearLabels, data: nData } = generateYearLabels(chartInfo);

  const chartData = _.map(chartInfo, (data) => {
    const output = {
      type: 'episodeData',
      data,
    };
    return output;
  });

  const nChartData = _.map(nData, (data) => {
    const output = {
      type: 'episodeData',
      data,
    };
    return output;
  });

  const isVisible = !!chartInfo.length;

  const onToggleChart = () => {
    const newChartType =
      chartType === 'season/episode' ? 'year/episode' : 'season/episode';
    setChartType(newChartType);
  };

  const view = {
    'season/episode': [...chartData, ...seasonLabels, ...episodeLabels],
    'year/episode': [...nChartData, ...yearLabels, ...episodeLabels],
  };

  const newChartInfo = view[chartType];

  return (
    <div className="chart">
      {isVisible ? <div className="y-axis-label">Seasons</div> : null}
      {isVisible ? <div className="x-axis-label">Episodes</div> : null}
      <button onClick={onToggleChart}>Toggle</button>
      <div className="chart-data">
        {_.map(newChartInfo, (info, index) => {
          const { data, type } = info;
          return <ChartSquare key={index} type={type} data={data} />;
        })}
      </div>
    </div>
  );
};
