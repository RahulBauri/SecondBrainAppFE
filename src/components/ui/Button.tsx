import type { ReactElement } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyles = {
  primary: 'bg-[var(--color-purple-500)] text-white',
  secondary: 'bg-[var(--color-purple-300)] text-[var(--color-purple-600)]',
};

const sizeStyles = {
  sm: 'py-1 px-2',
  md: 'py-2 px-4',
  lg: 'py-4 px-6',
};

const defaultStyles = 'rounded-md flex items-center';

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}
      onClick={props.onClick}
    >
      {props.startIcon ? <div className='pr-2'>{props.startIcon}</div> : null}
      {props.text}
      {props.endIcon ? <div className='pl-2'>{props.endIcon}</div> : null}
    </button>
  );
};
