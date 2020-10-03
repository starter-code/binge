import classNames from 'classnames';
import React, { useContext } from 'react';
import { Routes } from './Routes';
import { LoadingContext } from '../../contexts/LoadingContext';

export const App = () => {
  const { isLoading } = useContext(LoadingContext);

  const appClassNames = classNames('app', {
    loading: isLoading,
  });

  return (
    <div className={appClassNames}>
      <Routes />
    </div>
  );
};
