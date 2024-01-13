'use client';

import { useState } from 'react';
import StatsToolbar from './toolbars/StatsToolbar';
import SocialToolbar from './toolbars/SocialToolbar';
import TextArea from '@/components/ui/TextArea';

export default function WordCounter() {
  const [text, setText] = useState('');
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center  border rounded-lg bg-white  w-10/12 h-4/5 p-6'>
        <StatsToolbar text={text} />

        <hr className='divider' />

        <TextArea placeholder='Type or paste your text here.' value={text} setValue={setText} />

        <hr className='divider' />

        <SocialToolbar text={text} />
        {/* <hr className='divider' />
        <div id='times' className='flex items-center justify-evenly w-full'>
          <div className='flex flex-col'>
            <h2 className='text-5xl'>12s</h2>
            <p className='text-md uppercase'>reading time</p>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-5xl'>16s</h2>
            <p className='text-md uppercase'>speaking time</p>
          </div>
        </div> */}
      </div>
    </main>
  );
}
