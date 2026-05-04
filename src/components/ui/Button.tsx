interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  // const { variant, size, text, startIcon, endIcon, onClick } = props;
  return (
    <button
      className='border-solid border-blue-800 border-2 bg-blue-800 rounded-sm text-gray-50 py-2 px-4 flex justify-around items-center'
      onClick={props.onClick}
    >
      {props.startIcon}
      {props.text}
      {props.endIcon}
    </button>
  );
};
