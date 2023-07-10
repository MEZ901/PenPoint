"use client";

import { Provider } from "jotai";

interface JotaiProviderProps {
  children: React.ReactNode;
}

const JotaiProvider: React.FC<JotaiProviderProps> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default JotaiProvider;
