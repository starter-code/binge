import { _ } from '../../utils';
import React from 'react';

import { ChartSquare } from './ChartSquare';

export const Chart = ({ data: chartInfo }) => {
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

  const seasonLabels = generateSeasonLabels(chartInfo);
  const episodeLabels = generateEpisodeNumberLabels(chartInfo);

  const chartData = _.map(chartInfo, (data) => {
    const output = {
      type: 'episodeData',
      data,
    };
    return output;
  });

  const newChartInfo = [...chartData, ...seasonLabels, ...episodeLabels];

  const isVisible = chartInfo ? chartInfo.length : false;

  return (
    <div className="chart">
      {isVisible ? <div className="y-axis-label">Seasons</div> : null}
      {isVisible ? <div className="x-axis-label">Episodes</div> : null}
      <div className="chart-data">
        {_.map(newChartInfo, (info, index) => {
          const { data, type } = info;
          return <ChartSquare key={index} type={type} data={data} />;
        })}
      </div>
    </div>
  );
};
