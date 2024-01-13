'use client';
import { useEffect, useRef, useState } from 'react';

export default function useKeywordCalculator(text: string) {
  const [words, setWords] = useState<[string, number][]>([]);
  const [loading, setLoading] = useState(false);
  const timeout = useRef<any>(null);

  useEffect(() => {
    if (!text) {
      setWords([]);
      return;
    }

    setLoading(true);

    timeout.current = setTimeout(() => {
      setWords(getTopWords(text));
      setLoading(false);
    }, 200);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [text]);

  return { words, loading } as const;
}

const getTopWords = (text: string): [string, number][] =>
  Object.entries(
    text.split(/\s+/).reduce((acc, word) => {
      const clean = word.toLowerCase().replace(/[^a-z]/g, '');
      if (!acc[clean]) {
        acc[clean] = 1;
      } else {
        acc[clean]++;
      }
      return acc;
    }, {} as Record<string, number>)
  )
    .filter(([word]) => !!word)
    .sort((a, b) => b[1] - a[1]);
