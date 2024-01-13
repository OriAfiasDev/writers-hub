interface Props {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string;
}

export default function IconButton({ icon, onClick, className, title }: Props) {
  return (
    <span
      className={`h-12 w-12 flex justify-center items-center bg-secondary cursor-pointer rounded-md mb-4 ${className} has-tooltip`}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span className='tooltip'>{title}</span>
    </span>
  );
}
