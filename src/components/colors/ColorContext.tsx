import React, { createContext, ReactNode, useContext } from 'react';

interface ColorContextInt {
  color: string;
  shades?: { [key: number]: string };
}
const ColorContext = createContext<ColorContextInt>({ color: 'default' });
export const useColorContext = () => useContext(ColorContext);

interface ColorContextProviderProps {
  value: ColorContextInt;
  children?: ReactNode;
}
const ColorContextProvider = (props: ColorContextProviderProps) => {
  const value = useColorContext();
  return (
    <ColorContext.Provider value={value || props.value}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
