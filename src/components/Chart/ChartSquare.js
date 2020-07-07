import classNameContext from 'classnames';
import gradient from 'gradient-color';
import React from 'react';

import { COLOR_GRADIENT, CHART_SQUARE_TYPES } from '../../constants/constants';
import { getColor } from './ChartHelpers';

export const ChartSquare = ({ data, type }) => {
  const { rating, season: seasonNumber, episode: episodeNumber } = data;

  // TODO: create a more verbose hex decimal color scheme
  const colorsGradient = gradient(COLOR_GRADIENT, 100);

  const style = {
    gridColumnStart:
      type === CHART_SQUARE_TYPES.YEAR_LABELS ? episodeNumber : null,
    gridColumnEnd: episodeNumber + 1,
    gridRowStart: seasonNumber,
    gridRowEnd: seasonNumber + 1,
    backgroundColor:
      type === CHART_SQUARE_TYPES.EPISODE_DATA &&
      getColor(rating, colorsGradient),
    color: type === CHART_SQUARE_TYPES.EPISODE_DATA ? '#F0F0F0' : '#000000',
  };

  const chartSquareClassNames = classNameContext({
    'episode-data-square': type === CHART_SQUARE_TYPES.EPISODE_DATA,
    'episode-number-labels': type === CHART_SQUARE_TYPES.EPISODE_NUMBER_LABELS,
    'season-labels': type === CHART_SQUARE_TYPES.SEASON_LABELS,
    'year-labels': type === CHART_SQUARE_TYPES.YEAR_LABELS,
  });

  const renderChartData = (inputType, inputData) => {
    let output = '';
    switch (inputType) {
      case CHART_SQUARE_TYPES.EPISODE_DATA:
        output = inputData.rating;
        break;
      case CHART_SQUARE_TYPES.EPISODE_NUMBER_LABELS:
        output = inputData.episode;
        break;
      case CHART_SQUARE_TYPES.SEASON_LABELS:
        output = inputData.season;
        break;
      case CHART_SQUARE_TYPES.YEAR_LABELS:
        output = inputData.year;
        break;
      default:
        throw new Error('Invalid Type');
    }
    return output;
  };

  return (
    <div className={chartSquareClassNames} style={style}>
      {renderChartData(type, data)}
    </div>
  );
};
