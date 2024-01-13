import Stat from '../components/stat';

interface Props {
  text: string;
}

const CHARS_PER_PAGE = 3000;

export default function StatsToolbar({ text }: Props) {
  const wordCount = text.length ? text.trim().split(/\s+/).length : 0;
  const charCount = text.replace(/\s/g, '').length;
  const charWithSpaceCount = text.length;
  const sentenceCount = text.split(/[.?!\n]/g).filter((sentence) => !!sentence.trim()).length;
  const paragraphCount = text.length ? text.replace(/\n$/gm, '').split(/\n/).length : 0;
  const pageCount = (text.length / CHARS_PER_PAGE).toFixed(2);

  return (
    <div className='flex items-center justify-between w-full'>
      <Stat title='words' value={wordCount} />
      <Stat title='characters' value={charCount} />
      <Stat title='chars' subtitle='withspace' value={charWithSpaceCount} />
      <Stat title='sentences' value={sentenceCount} />
      <Stat title='paragraphs' value={paragraphCount} />
      <Stat title='pages' value={pageCount} />
    </div>
  );
}
