import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { NextIcon } from 'src/components/Icons';
import { _ } from 'src/utils';
import { PREVIEW_SERIES_COUNT } from 'src/constants';

export const Carousel = ({ Component, data }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  const onClick = (direction) => {
    switch (direction) {
      case 'previous':
        setStartIndex(startIndex - PREVIEW_SERIES_COUNT);
        setEndIndex(endIndex - PREVIEW_SERIES_COUNT);
        break;
      case 'next':
        setStartIndex(startIndex + PREVIEW_SERIES_COUNT);
        setEndIndex(endIndex + PREVIEW_SERIES_COUNT);
        break;
      default:
        console.error('No direction input');
        break;
    }
  };

  const isPreviousDisabled = startIndex - 4 < 0;
  const isNextDisabled = endIndex + 4 > data.length;

  return (
    <section className="carousel">
      <div>
        <button
          className="previous-button"
          onClick={() => onClick('previous')}
          disabled={isPreviousDisabled}
        >
          <NextIcon />
        </button>
        <button
          className="next-button"
          onClick={() => onClick('next')}
          disabled={isNextDisabled}
        >
          <NextIcon />
        </button>
      </div>

      {_.map(_.slice(data, startIndex, endIndex), (componentData, index) => {
        return <Component data={componentData} key={index} />;
      })}
    </section>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  Component: PropTypes.func,
};
