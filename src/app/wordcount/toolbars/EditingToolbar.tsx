'use client';

import IconButton from '@/components/ui/IconButton';
import { MdOutlineDelete } from 'react-icons/md';
import { FaRegCopy } from 'react-icons/fa6';
import { RiAiGenerate } from 'react-icons/ri';
import { MdAutoFixHigh } from 'react-icons/md';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function EditingToolbar({ text, setText }: Props) {
  const onCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const onClear = () => {
    setText('');
  };

  return (
    <div>
      <IconButton icon={<FaRegCopy />} title='Copy' onClick={onCopy} />
      <IconButton icon={<MdOutlineDelete />} title='Clear' onClick={onClear} />
      <hr className='divider' />
      <IconButton icon={<RiAiGenerate />} title='Repurpose' />
      <IconButton icon={<MdAutoFixHigh />} title='Fix' />

      {/* <div className='h-12 w-12 flex justify-center items-center bg-secondary hover:bg-primary cursor-pointer rounded-md mb-4'>
        <FaEdit />
      </div>
      <div className='h-12 w-12 flex justify-center items-center bg-secondary hover:bg-primary cursor-pointer rounded-md mb-4'>
        <FaEdit />
      </div> */}
    </div>
  );
}
