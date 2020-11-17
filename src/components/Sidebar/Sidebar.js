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

  // TODO: Rip an episode synopsis out to pass to sidebar
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
        <h1>{data.title}</h1>
        <p>Rating: {data.rating}</p>
        <p>Rating Count: {data.ratingCount}</p>
      </section>
    </div>
  );
};

Sidebar.propTypes = {
  data: TEpisodeData,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};
