import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useEditingToolbar(text: string, setText: Dispatch<SetStateAction<string>>) {
  const [actions, setActions] = useState<string[]>([text]);

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

  useEffect(() => {
    if (text !== '') {
      setActions((prev) => (prev[prev.length - 1] === text ? prev : [...prev, text]));
    }
  }, [text]);

  return { onCopy, onClear, onUndo } as const;
}
