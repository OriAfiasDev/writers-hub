// app/providers.jsx

'use client';

import { TextAreaContextProvider } from '@/providers/TextAreaProvider';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute='class'>
      <TextAreaContextProvider>{children}</TextAreaContextProvider>
    </ThemeProvider>
  );
}
