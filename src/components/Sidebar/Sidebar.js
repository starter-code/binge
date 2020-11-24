import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { CollapseIcon } from 'src/components/Icons';
import { _ } from 'src/utils';
import { TEpisodeData } from 'prop-types.d.js';

export const Sidebar = ({ data, onToggleSidebar, isSidebarOpen }) => {
  const sidebarClassNames = classNames({
    sidebar: true,
    'sidebar-open': isSidebarOpen,
    'sidebar-closed': !isSidebarOpen,
  });

  return (
    <div className={sidebarClassNames}>
      <div className="sidebar-collapse-container">
        <button
          className="no-styles collapse-button"
          onClick={_.isEmpty(data) ? _.noop : onToggleSidebar}
          disabled={_.isEmpty(data)}
        >
          <CollapseIcon />
        </button>
      </div>
      <section className="sidebar-container">
        <a href={data.url} target="_blank" rel="noreferrer">
          <img alt={`Poster Image of ${data.title}`} src={data.imageURL}></img>
        </a>
        <h1 className="episode-title">{data.title}</h1>
        <p className="episode-summary">{data.episodeSummary}</p>
        <p className="episode-run-time">
          Episode Length: {data.episodeRunTime}
        </p>
        <p className="episode-release-date">{data.episodeReleaseDate}</p>
        <p className="episode-rating">Rating: {data.rating}</p>
        <p className="episode-rating-count">Rating Count: {data.ratingCount}</p>
      </section>
    </div>
  );
};

Sidebar.propTypes = {
  data: TEpisodeData,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};
