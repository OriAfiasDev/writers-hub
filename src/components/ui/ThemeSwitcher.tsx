'ues client';

import { useTheme } from 'next-themes';
import { CiDark, CiLight } from 'react-icons/ci';

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div
      className='flex items-center justify-center w-fit h-10 rounded-lg btn-gradient cursor-pointer px-2 shadow-lg'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <CiDark className='text-2xl text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <CiLight className='text-2xl text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
    </div>
  );
}
