interface Props {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string;
  disabled?: boolean;
}

export default function IconButton({ icon, onClick, className, title, disabled }: Props) {
  return (
    <span
      aria-disabled={disabled}
      className={`h-8 w-8 lg:h-12 lg:w-12 mx-2 lg:mx-0 lg:my-2 flex justify-center items-center bg-secondary cursor-pointer rounded-md ${className} has-tooltip ${
        disabled && 'pointer-events-none opacity-50'
      }`}
      onClick={onClick}
    >
      <span className='p-3'>{icon}</span>
      <span className='tooltip'>{title}</span>
    </span>
  );
}
