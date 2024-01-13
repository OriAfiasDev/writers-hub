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
      className={`h-12 w-12 flex justify-center items-center bg-secondary cursor-pointer rounded-md mb-4 ${className} has-tooltip ${
        disabled && 'pointer-events-none opacity-50'
      }`}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span className='tooltip'>{title}</span>
    </span>
  );
}
