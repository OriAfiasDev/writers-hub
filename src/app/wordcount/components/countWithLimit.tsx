'use client';

interface Props {
  limit: number;
  count: number;
  color: string;
  title: string;
}

export default function CountWithLimit({ limit, count, color, title }: Props) {
  const percentageClassName = `${100 - (count / limit) * 100}%`;

  return (
    <div className='w-full mx-4'>
      <div className='row'>
        <p className='capitalize text-xs text-secondary mb-2'>{title}</p>
        <div className='bg-gray-300 rounded-full w-full h-2'>
          <div style={{ width: `${percentageClassName}` }} className={`h-full rounded-full ${color}`}></div>
        </div>
        <p className='text-xs text-secondary'>
          <span className='font-bold'>{formatNumber(limit - count)}</span>&nbsp;/&nbsp;{formatNumber(limit)}
        </p>
      </div>
    </div>
  );
}

const formatNumber = (number: number) => Intl.NumberFormat('en', { notation: 'compact' }).format(number);
