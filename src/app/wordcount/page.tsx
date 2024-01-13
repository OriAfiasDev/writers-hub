'use client';

import { useState } from 'react';
import StatsToolbar from './toolbars/StatsToolbar';
import SocialToolbar from './toolbars/SocialToolbar';
import TextArea from '@/components/ui/TextArea';
import Keywords from './toolbars/Keywords';
import { EditingToolbar } from './toolbars/EditingToolbar';

export default function WordCounter() {
  const [text, setText] = useState(localStorage.getItem('text') || '');
  return (
    <main className='flex items-center justify-center h-full-screen'>
      <div className='flex h-120 w-8/12'>
        <div className='card w-1/12 h-full'>
          <EditingToolbar text={text} setText={setText} />
        </div>
        <div className='card w-8/12 h-full mx-4'>
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
        <div className='card w-3/12 h-full'>
          <Keywords text={text} />
        </div>
      </div>
    </main>
  );
}
