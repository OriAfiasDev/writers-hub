'use client';

import useTextAreaContext from '@/providers/TextAreaProvider';
import { Inconsolata } from 'next/font/google';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  setValue: (value: string) => void;
  className?: string;
}

const textAreaFont = Inconsolata({ subsets: ['latin'], weight: ['400', '900'] });

export default function TextArea({ value, setValue, className, ...rest }: Props) {
  const { isBold } = useTextAreaContext();
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`focus:outline-none rounded-lg leading-6 tracking-wide text-slate-500 bg-primary resize-none ${
        textAreaFont.className
      } ${className} ${isBold && 'font-bold'}`}
      {...rest}
    />
  );
}
