import IconButton from '@/components/ui/IconButton';
import { MdOutlineDelete } from 'react-icons/md';
import { FaRegCopy } from 'react-icons/fa6';
import { RiAiGenerate } from 'react-icons/ri';
import { MdAutoFixHigh } from 'react-icons/md';
import { MdOutlineSummarize } from 'react-icons/md';
import { CiUndo } from 'react-icons/ci';
import { IoSaveOutline } from 'react-icons/io5';
import { FaBold } from 'react-icons/fa';

import { Dispatch, SetStateAction } from 'react';
import useEditingToolbar from './useEditingToolbar';

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function EditingToolbar({ text, setText }: Props) {
  const { onCopy, onClear, onUndo, onSave, onBold } = useEditingToolbar(text, setText);

  return (
    <div className='card w-full lg:w-1/12 h-12 lg:h-full flex flex-row lg:flex-col justify-center items-center overflow-y-hidden overflow-x-auto shrink-0'>
      <IconButton icon={<FaRegCopy />} title='Copy' onClick={onCopy} />
      <IconButton icon={<MdOutlineDelete />} title='Clear' onClick={onClear} />
      <IconButton icon={<CiUndo />} title='Undo' onClick={onUndo} />
      <IconButton icon={<IoSaveOutline />} title='Save' onClick={onSave} />

      <hr className='divider-responsive' />

      <IconButton icon={<FaBold />} title='Bold' onClick={onBold} />
      <IconButton disabled icon={<MdAutoFixHigh />} title='Fix' />
      <IconButton disabled icon={<MdOutlineSummarize />} title='Summarize' />

      <hr className='divider-responsive' />
      <IconButton disabled icon={<RiAiGenerate />} title='Repurpose' />
      <IconButton disabled icon={<MdAutoFixHigh />} title='Fix' />
    </div>
  );
}
