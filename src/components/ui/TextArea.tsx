import { Inconsolata } from 'next/font/google';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  setValue: (value: string) => void;
  className?: string;
}

const textAreaFont = Inconsolata({ subsets: ['latin'], weight: ['400'] });

export default function TextArea({ value, setValue, className, ...rest }: Props) {
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`w-full h-[400px] focus:outline-none rounded-lg leading-6 tracking-wide py-4 text-slate-500 ${textAreaFont.className} ${className}`}
      {...rest}
    />
  );
}