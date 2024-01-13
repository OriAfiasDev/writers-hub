'use client';

import useTextAreaContext from '@/providers/TextAreaProvider';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useEditingToolbar(text: string, setText: Dispatch<SetStateAction<string>>) {
  const [actions, setActions] = useState<string[]>([text]);
  const { setIsBold } = useTextAreaContext();

  const onCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const onClear = () => {
    setText('');
  };

  const onUndo = () => {
    if (actions.length < 2) return;
    const lastAction = actions[actions.length - 2];
    setActions((prev) => prev.slice(0, prev.length - 1));
    setText(lastAction);
  };

  const onSave = () => {
    localStorage.setItem('text', text);
  };

  const onBold = () => {
    setIsBold((prev) => !prev);
  };

  useEffect(() => {
    if (text !== '') {
      setActions((prev) => (prev[prev.length - 1] === text ? prev : [...prev, text]));
    }
  }, [text]);

  return { onCopy, onClear, onUndo, onSave, onBold } as const;
}
