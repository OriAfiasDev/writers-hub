'use client';

import { useState } from 'react';
import StatsToolbar from './toolbars/StatsToolbar';
import SocialToolbar from './toolbars/SocialToolbar';
import TextArea from '@/components/ui/TextArea';

export default function WordCounter() {
  const [text, setText] = useState('');
  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='flex flex-col items-center rounded-lg bg-primary w-10/12 h-full p-6'>
        <StatsToolbar text={text} />

        <hr className='divider' />

        <TextArea
          placeholder='Type or paste your text here.'
          value={text}
          setValue={setText}
          className='w-full h-[480px]'
        />

        <hr className='divider' />

        <SocialToolbar text={text} />
      </div>
    </main>
  );
}
