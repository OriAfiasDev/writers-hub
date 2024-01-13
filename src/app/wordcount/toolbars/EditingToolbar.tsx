import IconButton from '@/components/ui/IconButton';
import { MdOutlineDelete } from 'react-icons/md';
import { FaRegCopy } from 'react-icons/fa6';
import { RiAiGenerate } from 'react-icons/ri';
import { MdAutoFixHigh } from 'react-icons/md';
import { MdOutlineSummarize } from 'react-icons/md';
import { CiUndo } from 'react-icons/ci';

import { Dispatch, SetStateAction } from 'react';
import useEditingToolbar from './useEditingToolbar';

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function EditingToolbar({ text, setText }: Props) {
  const { onCopy, onClear, onUndo } = useEditingToolbar(text, setText);

  return (
    <div>
      <IconButton icon={<FaRegCopy />} title='Copy' onClick={onCopy} />
      <IconButton icon={<MdOutlineDelete />} title='Clear' onClick={onClear} />
      <IconButton icon={<CiUndo />} title='Undo' onClick={onUndo} />
      <hr className='divider' />

      <IconButton disabled icon={<RiAiGenerate />} title='Repurpose' />
      <IconButton disabled icon={<MdAutoFixHigh />} title='Fix' />
      <IconButton disabled icon={<MdOutlineSummarize />} title='Summarize' />

      <hr className='divider' />
      <IconButton disabled icon={<RiAiGenerate />} title='Repurpose' />
      <IconButton disabled icon={<MdAutoFixHigh />} title='Fix' />
      <IconButton disabled icon={<MdOutlineSummarize />} title='Summarize' />
    </div>
  );
}
