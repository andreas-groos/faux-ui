import React, { createContext, useContext, useState, ReactNode } from "react";
import { FauxBoxProps } from "../types";

const defaultContextValue: FauxBoxProps = {
  style: { background: "green" },
  color: "blue",
  colorWeight: 300,
};

const FauxBoxContext = createContext<FauxBoxProps>(defaultContextValue);

export const useFauxBox = () => useContext(FauxBoxContext);

interface FauxBoxProviderProps {
  children: ReactNode;
  value?: Omit<FauxBoxProps, "children">;
}

export const FauxProvider: React.FC<FauxBoxProviderProps> = ({
  children,
  value = defaultContextValue,
}) => {
  return (
    <FauxBoxContext.Provider value={value}>{children}</FauxBoxContext.Provider>
  );
};
