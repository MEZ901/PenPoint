"use client";

import { Provider } from "jotai";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default Providers;
