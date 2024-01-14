import useKeywordCalculator from './useKeywordCalculator';

interface Props {
  text: string;
}

export default function Keywords({ text }: Props) {
  const { words, loading } = useKeywordCalculator(text);

  return (
    <div className='card w-full lg:w-3/12 h-full'>
      <div className='w-full'>
        <div className='h-12 lg:h-16 w-full flex justify-center items-center'>
          <h2>Most used words</h2>
        </div>
        <div className='divider' />

        <div className='h-32 lg:h-96 overflow-y-auto'>
          {loading && (
            <div className='flex justify-center items-center py-2'>
              <p className='text-sm text-secondary'>Calculating...</p>
            </div>
          )}
          {words.map(([word, count]) => (
            <div key={word} className='flex justify-between items-center py-2'>
              <p className='text-sm text-secondary w-36 truncate hover:text-clip'>{word}</p>
              <p className='text-sm text-primary'>{count}</p>
            </div>
          ))}
        </div>
        <div className='divider' />
        <div className='h-20 w-full flex flex-col justify-center items-center'>
          <h1 className='text-primary font-bold ml-2 text-4xl'>{words.length}</h1>
          <h2>Total unique words</h2>
        </div>
      </div>
    </div>
  );
}
