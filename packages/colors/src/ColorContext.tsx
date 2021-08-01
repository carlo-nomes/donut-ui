import React, { createContext, ReactNode, useContext } from 'react';

interface ColorContextInt {
  color: string;
  shades?: { [key: number]: string };
}
const ColorContext = createContext<ColorContextInt | null>(null);
export const useColorContext = () => {
  const context = useContext(ColorContext);

  if (!context && process.env.NODE_ENV === 'development') {
    console.warn('Should not use useColor outside of a ColorContextProvider');
  }

  return context as ColorContextInt;
};

interface ColorContextProviderProps {
  value: ColorContextInt;
  children?: ReactNode;
}
const ColorContextProvider = (props: ColorContextProviderProps) => {
  return (
    <ColorContext.Provider value={props.value}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
