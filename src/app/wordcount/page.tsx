'use client';

import { useEffect, useState } from 'react';
import StatsToolbar from './toolbars/StatsToolbar';
import SocialToolbar from './toolbars/SocialToolbar';
import TextArea from '@/components/ui/TextArea';
import Keywords from './toolbars/Keywords';
import { EditingToolbar } from './toolbars/EditingToolbar';

export default function WordCounter() {
  const [text, setText] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage) {
      setText(localStorage.getItem('text') || '');
    }
  }, []);

  return (
    <main className='flex items-center justify-center h-full-screen'>
      <div className='flex flex-col lg:flex-row h-120 w-10/12 lg:w-8/12'>
        <EditingToolbar text={text} setText={setText} />
        <div className='card w-full lg:h-full lg:w-8/12 h-full my-4 lg:my-0 lg:mx-4 flex flex-col'>
          <StatsToolbar text={text} />

          <hr className='divider' />

          <TextArea
            placeholder='Type or paste your text here.'
            value={text}
            setValue={setText}
            className='w-full h-96'
          />

          <hr className='divider' />

          <SocialToolbar text={text} />
        </div>
        <Keywords text={text} />
      </div>
    </main>
  );
}
