interface Props {
  title: string;
  subtitle?: string;
  value: string | number;
}

export default function Stat({ title, subtitle, value }: Props) {
  return (
    <div className='flex flex-col'>
      <p className='text-sm text-slate-500 capitalize pb-2'>
        {title}
        {subtitle && <span className='text-xs lowercase'>&nbsp;({subtitle})</span>}
      </p>
      <h2 className='text-3xl font-bold'>{value}</h2>
    </div>
  );
}