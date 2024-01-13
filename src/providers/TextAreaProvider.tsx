'use client';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface Config {
  isBold: boolean;
  setIsBold: Dispatch<SetStateAction<boolean>>;
}
const TextAreaContext = createContext<Config>({
  isBold: false,
  setIsBold: () => {},
});

export function TextAreaContextProvider({ children }: { children: ReactNode }) {
  const [isBold, setIsBold] = useState(false);

  return (
    <TextAreaContext.Provider
      value={{
        isBold,
        setIsBold,
      }}
    >
      {children}
    </TextAreaContext.Provider>
  );
}

export default function useTextAreaContext() {
  const props = useContext(TextAreaContext);

  return { ...props } as const;
}
