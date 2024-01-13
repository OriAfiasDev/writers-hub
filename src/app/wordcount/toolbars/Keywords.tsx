import useKeywordCalculator from './useKeywordCalculator';

interface Props {
  text: string;
}

export default function Keywords({ text }: Props) {
  const { words, loading } = useKeywordCalculator(text);

  return (
    <div className='w-full'>
      <div className='h-16 w-full flex justify-center items-center'>
        <h2>Most used words</h2>
      </div>
      <div className='divider' />
      <div className='h-96 w-full overflow-y-scroll'>
        {words.map(([word, count]) => (
          <div key={word} className='flex justify-between items-center py-2'>
            <p className='text-sm text-secondary'>{word}</p>
            <p className='text-sm text-primary'>{count}</p>
          </div>
        ))}
        {loading && (
          <div className='flex justify-center items-center py-2'>
            <p className='text-sm text-secondary'>Calculating...</p>
          </div>
        )}
      </div>
    </div>
  );
}
