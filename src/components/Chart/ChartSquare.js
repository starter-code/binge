import classNameContext from 'classnames';
import React from 'react';

export const ChartSquare = ({ data, type }) => {
  const { rating, season: seasonNumber, episode: episodeNumber } = data;
  // TODO: create a more verbose hex decimal color scheme
  const getColor = (episodeRating) => {
    let color = 'white';
    if (episodeRating <= 4) {
      color = 'red';
    } else if (episodeRating <= 7) {
      color = 'yellow';
    } else {
      color = 'green';
    }
    return color;
  };

  const style = {
    gridColumnStart: episodeNumber,
    gridColumnEnd: episodeNumber + 1,
    gridRowStart: seasonNumber,
    gridRowEnd: seasonNumber + 1,
    backgroundColor: type === 'episodeData' && getColor(rating),
  };

  const chartSquareClassNames = classNameContext({
    'episode-data-square': type === 'episodeData',
    'season-labels': type === 'seasonLabels',
    'episode-labels': type === 'episodeLabels',
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
