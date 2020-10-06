import classNameContext from 'classnames';
import gradient from 'gradient-color';
import React from 'react';

import { COLOR_GRADIENT, CHART_SQUARE_TYPES } from '../../constants/constants';
import { getColor } from '../../utils';

const {
  EPISODE_DATA,
  EPISODE_NUMBER_LABELS,
  SEASON_LABELS,
  YEAR_LABELS,
} = CHART_SQUARE_TYPES;

export const ChartSquare = ({ data, type }) => {
  const { rating, season: seasonNumber, episode: episodeNumber } = data;

  // TODO: create a more verbose hex decimal color scheme
  const colorsGradient = gradient(COLOR_GRADIENT, 100);

  const style = {
    backgroundColor: type === EPISODE_DATA && getColor(rating, colorsGradient),
    color: type === EPISODE_DATA ? '#F0F0F0' : '#000000',
    gridColumnEnd: episodeNumber + 1,
    gridColumnStart: type === YEAR_LABELS ? episodeNumber : null,
    gridRowEnd: seasonNumber + 1,
    gridRowStart: seasonNumber,
  };

  const chartSquareClassNames = classNameContext({
    'episode-data-square': type === EPISODE_DATA,
    'episode-number-labels': type === EPISODE_NUMBER_LABELS,
    'season-labels': type === SEASON_LABELS,
    'year-labels': type === YEAR_LABELS,
  });

  const renderChartData = (inputType, inputData) => {
    let output = '';
    const { episode, rating, season, year } = inputData;
    switch (inputType) {
      case EPISODE_DATA:
        output = rating;
        break;
      case EPISODE_NUMBER_LABELS:
        output = episode;
        break;
      case SEASON_LABELS:
        output = season;
        break;
      case YEAR_LABELS:
        output = year;
        break;
      default:
        throw new Error('Invalid Type');
    }
    return output;
  };

  return (
    <div className={chartSquareClassNames} style={style}>
      {type === EPISODE_DATA ? (
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          {renderChartData(type, data)}
        </a>
      ) : (
        renderChartData(type, data)
      )}
    </div>
  );
};
