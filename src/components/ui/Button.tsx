import type { ReactElement } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles = {
  primary:
    'bg-[var(--color-purple-500)] text-white hover:shadow-xl hover:shadow-purple-400',
  secondary:
    'bg-[var(--color-purple-300)] text-[var(--color-purple-600)] hover:shadow-xl hover:shadow-purple-400',
};

const sizeStyles = {
  sm: 'py-1 px-2 text-sm rounded-sm',
  md: 'py-2 px-4 text-md rounded-md',
  lg: 'py-4 px-6 text-lg rounded-lg',
};

const defaultStyles =
  'font-light flex items-center justify-center shadow-md shadow-purple-300 cursor-pointer';

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.fullWidth ? ' w-full' : ''} ${props.loading ? ' opacity-45' : ''}`}
      disabled={props.loading}
      onClick={props.onClick}
    >
      {props.startIcon ? <div className='pr-2'>{props.startIcon}</div> : null}
      {props.text}
      {props.endIcon ? <div className='pl-2'>{props.endIcon}</div> : null}
    </button>
  );
};
