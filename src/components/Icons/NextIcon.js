import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const NextIcon = ({ className }) => {
  const svgClassNames = classNames('next-icon', className);
  return (
    <svg
      className={svgClassNames}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="31"
      width="24"
    >
      <path d="M13.449 12.111l-7.86 7.59a1.916 1.916 0 0 0-.048 2.716 1.93 1.93 0 0 0 2.717.047l9.234-8.918c.386-.372.583-.862.59-1.354.01-.492-.17-.988-.542-1.374L8.622 1.584a1.93 1.93 0 0 0-2.716-.049 1.916 1.916 0 0 0-.047 2.717l7.59 7.86z" />
    </svg>
  );
};

NextIcon.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string),
};
