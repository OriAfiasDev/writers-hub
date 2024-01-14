import CountWithLimit from '../components/countWithLimit';

interface Props {
  text: string;
}

const SOCIALS = [
  {
    title: 'facebook',
    color: 'bg-facebook',
    limit: 63206,
  },
  {
    title: 'twitter',
    color: 'bg-twitter',
    limit: 4000,
  },
  {
    title: 'linkedin',
    color: 'bg-linkedin',
    limit: 3000,
  },
  {
    title: 'reddit',
    color: 'bg-reddit',
    limit: 40000,
  },
  {
    title: 'instagram',
    color: 'bg-instagram',
    limit: 2200,
  },
];

export default function SocialToolbar({ text }: Props) {
  return (
    <div className='flex flex-row items-center justify-between w-full my-4 overflow-x-auto overflow-y-hidden'>
      {SOCIALS.map((social) => (
        <CountWithLimit
          key={social.title}
          limit={social.limit}
          count={text.length}
          color={social.color}
          title={social.title}
        />
      ))}
    </div>
  );
}
