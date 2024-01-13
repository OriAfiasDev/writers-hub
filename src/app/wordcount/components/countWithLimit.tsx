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
        <div className='bg-gray-300 rounded-full w-full h-2'>
          <div style={{ width: `${percentageClassName}` }} className={`h-full rounded-full ${color}`}></div>
        </div>
        <p className='capitalize text-xs text-slate-500 mr-8'>{title}</p>
        <p className='text-xs text-slate-500'>
          <span className='font-bold'>{limit - count}</span>&nbsp;/&nbsp;{limit}
        </p>
      </div>
    </div>
  );
}
