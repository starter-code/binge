import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const AppContext = React.createContext(null);

// This context provider is passed to any component requiring the context
export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        isLoading,
        setIsDarkMode,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
