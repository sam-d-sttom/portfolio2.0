import React, { createContext, useState, useEffect } from 'react';

const ViewPortWidthContext = createContext();

const ViewPortWidthProvider = ({ children }) => {
  const [viewportWidth, setViewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ViewPortWidthContext.Provider value={{ viewportWidth, setViewPortWidth }}>
      {children}
    </ViewPortWidthContext.Provider>
  );
};

export { ViewPortWidthContext, ViewPortWidthProvider };
