import React, {createContext, useState} from 'react';

export type GlobalContent = {
  showSplashScreen: boolean;
  setShowSplashScreen: (c: any) => void;
};

export const SplashContext = createContext<GlobalContent>({
  showSplashScreen: true,
  setShowSplashScreen: () => {},
});

const GlobalContext = ({children}: any) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  return (
    <SplashContext.Provider value={{showSplashScreen, setShowSplashScreen}}>
      {children}
    </SplashContext.Provider>
  );
};

export default GlobalContext;
