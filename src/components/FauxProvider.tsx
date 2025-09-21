import React, { createContext, useContext, ReactNode } from "react";
import { FauxBoxProps } from "../types";
import {
  defaultColor,
  defaultColorWeight,
  defaultFauxStyle,
} from "../constants";

const defaultContextValue: FauxBoxProps = {
  color: defaultColor,
  colorWeight: defaultColorWeight,
  fauxStyle: defaultFauxStyle,
};

const FauxBoxContext = createContext<FauxBoxProps>(defaultContextValue);

export const useFauxBox = () => useContext(FauxBoxContext);

interface FauxBoxProviderProps {
  children: ReactNode;
  value?: Omit<FauxBoxProps, "children">;
}

export const FauxProvider: React.FC<FauxBoxProviderProps> = ({
  children,
  value = {},
}) => {
  const mergedValue = {
    ...defaultContextValue,
    ...value,
    style: {
      ...defaultContextValue.style,
      ...(value && value.style),
    },
  };
  return (
    <FauxBoxContext.Provider value={mergedValue}>
      {children}
    </FauxBoxContext.Provider>
  );
};
