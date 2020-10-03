import React, { useState } from 'react';

export const LoadingContext = React.createContext(null);

// This context provider is passed to any component requiring the context
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
