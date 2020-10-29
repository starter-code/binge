import classNames from 'classnames';
import React, { useContext } from 'react';
import { Routes } from './Routes';
import { AppContext } from 'src/contexts/AppContext';

export const App = () => {
  const { isLoading, isDarkMode } = useContext(AppContext);

  const appClassNames = classNames('app', {
    loading: isLoading,
    'dark-mode': isDarkMode,
  });

  return (
    <div className={appClassNames}>
      <Routes />
    </div>
  );
};
