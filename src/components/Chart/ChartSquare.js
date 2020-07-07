import classNameContext from 'classnames';
import gradient from 'gradient-color';
import React from 'react';

// 10 colors from dark red to yellow to dark green
const colors = [
  '#110000',
  '#770000',
  '#880000',
  '#CC0000',
  '#FF0000', // red
  '#CCCC00', // dark yellow
  '#FFFF00', // yellow
  '#00FF00', // green
  '#008800', // mid green
  '#001100', // dark green
];

export const ChartSquare = ({ data, type }) => {
  const { rating, season: seasonNumber, episode: episodeNumber } = data;
  // TODO: create a more verbose hex decimal color scheme

  const colorsGradient = gradient(colors, 100);
  const getColor = (episodeRating) => {
    let rating = episodeRating * 10;
    let color = colorsGradient[rating];
    return color;
  };

  const style = {
    gridColumnStart: episodeNumber,
    gridColumnEnd: episodeNumber + 1,
    gridRowStart: seasonNumber,
    gridRowEnd: seasonNumber + 1,
    backgroundColor: type === 'episodeData' && getColor(rating),
    color: type === 'episodeData' ? '#F0F0F0' : '#000000',
  };

  const chartSquareClassNames = classNameContext({
    'episode-data-square': type === 'episodeData',
    'season-labels': type === 'seasonLabels',
    'episode-labels': type === 'episodeLabels',
    'year-labels': type === 'yearLabels',
  });

  const renderChartData = (inputType, inputData) => {
    let output = '';
    switch (inputType) {
      case 'episodeData':
        output = inputData.rating;
        break;
      case 'seasonLabels':
        output = inputData.season;
        break;
      case 'yearLabels':
        output = inputData.year;
        break;
      case 'episodeLabels':
        output = inputData.episode;
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
